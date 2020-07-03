import { Component, OnInit } from "@angular/core";
import {
  FormControl,
  Validators
} from "@angular/forms";
import { Router } from "@angular/router";
import { UserService } from "src/app/services/user.service";
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatRadioChange } from '@angular/material';
import { NgxSpinnerService } from "ngx-spinner";


@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.scss"]
})
export class RegisterComponent implements OnInit {
  errorMsg: string;
  passwordMsg: string;
  myPatt: string;
  toggle: boolean;
  response: any;
  showSpinner=false;
  constructor(
    private router: Router,
    public userService: UserService, private snackbar: MatSnackBar,private spinner: NgxSpinnerService,
  ) { }

  ngOnInit() {
  }

  model = {};
  hide = true;
  fullName = new FormControl("", [Validators.required, Validators.pattern("^[A-Z][a-z]+\\s?[A-Z][a-z]+$")]);
  // lastname = new FormControl("", [Validators.required,Validators.pattern("^[A-Z][a-z]{2,}$")]);
  mobileNumber = new FormControl("", [Validators.required,Validators.pattern("^[6-9][0-9]{9}$")]);
  emailId = new FormControl("", [Validators.required, Validators.email,Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$")]);
  password = new FormControl("", [Validators.required, Validators.pattern("((?=.*[a-z])(?=.*[0-9])(?=.*[A-Z])(?=.*[@#$%!]).{8,40})")]);
  // confirmPassword = new FormControl("", [Validators.required]);
  person=String;


  //To display firstname error message.
  getFullnameErrorMessage() {
    return this.fullName.hasError("required")
      ? "First name is required"
      : this.fullName.hasError("pattern")
        ? "Please enter a valid name"
        : " ";
  }
  /* //To display lastname error message.
   getLastnameErrorMessage() {
     return this.lastname.hasError("required")
     ? "Last name is required"
     : this.lastname.hasError("pattern")
       ? "Please enter a valid last name"
       : " ";
   }*/
  //To display mobile error message
  getMobileErrorMessage() {
    return this.mobileNumber.hasError("required")
      ? "Mobile number is required"
      : this.mobileNumber.hasError("pattern")
        ? "Please enter a valid mobile number"
        : " ";
  }
  //To display email error message
  getEmailErrorMessage() {
    return this.emailId.hasError("required")
      ? "Email id is required"
      : this.emailId.hasError("pattern")
        ? "Please enter a valid email id"
        : " ";
  }
  //To display password error message
  getPasswordErrorMessage() {
    return this.password.hasError("required")
      ? "Password is required"
      : this.password.hasError("pattern")
        ? "Please enter a valid password"
        : " ";
  }
  //To display confirmPassword error message.
  /* getConfirmPasswordErrorMessage() {
     return this.confirmPassword.hasError("required")
     ? "Confirm password is required"
       : " ";
   }*/
  validate() {
    if (this.emailId.valid && this.password.valid && this.fullName.valid &&
      this.mobileNumber.valid) {
      this.toggle = false;
      return "false";
    }
    this.toggle = true;
    return "true";
  }

  onChange(mrChange: MatRadioChange) {
    console.log(mrChange.value);
   this.person=mrChange.value;
   console.log(this.person);

  }
  
  register() {      this.showSpinner=true;

    var reqbody = {
      fullName: this.fullName.value,
      //lastName: this.lastname.value,
      mobileNumber: this.mobileNumber.value,
      emailId: this.emailId.value,
      password: this.password.value,
      roleType:this.person,
    };
    console.log(reqbody);
    this.spinner.show();
    this.userService.register(reqbody).subscribe(
      data => {
        console.log(data);
        this.response = data;
        this.spinner.hide();
        //this.snackbar.open('User registered Successfully!!', 'ok', { duration: 5000 });
        // this.snackbar.open("User registered Successfully!!!!");
        this.errorMsg="Register Successfull check Registered email to verify account"
        this.router.navigate(["login"]);
      },
      err => {
        console.log(err);
        //this.snackbar.open("Registeration Failed!!", 'ok', { duration: 3000 });
        this.errorMsg = "Registeration Failed!!";
        this.spinner.hide();
      });
  }
  login() {
    this.router.navigate(["login"]);
  }
}