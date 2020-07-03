import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog, MatSnackBar, MatDialogConfig } from '@angular/material';

@Component({
  selector: 'app-user-books',
  templateUrl: './user-books.component.html',
  styleUrls: ['./user-books.component.scss']
})
export class UserBooksComponent implements OnInit {

  constructor(
     private router: Router,
    private snackbar: MatSnackBar,
    public dialog: MatDialog // private bookService: BookService, // private addressService: AddressService
  ) {}

  visible: boolean;
  profilepic: boolean = false;
  profile: any;
  ngOnInit() {
    if (localStorage.getItem("token") != null) {
      this.visible = true;
    } else {
      this.profilepic = false;
    }

    this.unverifiedBooks();

    this.profile = localStorage.getItem("userimage");
  }

  books = [
    {
      bookAddedTime: "2020-06-01T11:22:34",
      bookApproveStatus: false,
      bookAuthor: "Silver",
      bookDescription:
        "csc covwo oei o   ww w w e o w w w w",
      bookId: 3,
      bookImage:
        "https://bookstore-profile.s3.ap-south-1.amazonaws.com/1593668533164-amm.jpg",
      bookName: "Harry potter",
      bookPrice: 2000,
      bookUpdatedTime: "2020-06-04T19:19:39",
      bookVerified: true,
      noOfBooks: 10,
      reviewRating: [],
      sellerName: "Geeth",
    },
    {
      bookAddedTime: "2020-06-01T11:22:34",
      bookApproveStatus: false,
      bookAuthor: "The Jack jon",
      bookDescription:
        "socmwvoc  mpm p owpo pcow pk mw wl mpqm wlmqpmv w wmwoqmv  q  mwvkowv d",
      bookId: 3,
      bookImage:
        "https://bookstore-profile.s3.ap-south-1.amazonaws.com/1593668533164-amm.jpg",
      bookName: "Share Pointer",
      bookPrice: 2525,
      bookUpdatedTime: "2020-06-04T19:19:39",
      bookVerified: true,
      noOfBooks: 50,
      reviewRating: [],
      sellerName: "Geeth",
    },
    {
      bookAddedTime: "2020-06-01T11:22:34",
      bookApproveStatus: false,
      bookAuthor: "The Jack jon",
      bookDescription:
        "socmwvoc  mpm p owpo pcow pk mw wl mpqm wlmqpmv w wmwoqmv  q  mwvkowv d",
      bookId: 3,
      bookImage:
        "https://bookstore-profile.s3.ap-south-1.amazonaws.com/1593668533164-amm.jpg",
      bookName: "Share Pointer",
      bookPrice: 2525,
      bookUpdatedTime: "2020-06-04T19:19:39",
      bookVerified: true,
      noOfBooks: 50,
      reviewRating: [],
      sellerName: "Geeth",
    },
    {
      bookAddedTime: "2020-06-01T11:22:34",
      bookApproveStatus: false,
      bookAuthor: "The Jack jon",
      bookDescription:
        "socmwvoc  mpm p owpo pcow pk mw wl mpqm wlmqpmv w wmwoqmv  q  mwvkowv d",
      bookId: 3,
      bookImage:
        "https://bookstore-profile.s3.ap-south-1.amazonaws.com/1593668533164-amm.jpg",
      bookName: "Share Pointer",
      bookPrice: 2525,
      bookUpdatedTime: "2020-06-04T19:19:39",
      bookVerified: true,
      noOfBooks: 50,
      reviewRating: [],
      sellerName: "Geeth",
    },
    {
      bookAddedTime: "2020-06-01T11:22:34",
      bookApproveStatus: false,
      bookAuthor: "The Jack jon",
      bookDescription:
        "socmwvoc  mpm p owpo pcow pk mw wl mpqm wlmqpmv w wmwoqmv  q  mwvkowv d",
      bookId: 3,
      bookImage:
        "https://bookstore-profile.s3.ap-south-1.amazonaws.com/1593668533164-amm.jpg",
      bookName: "Share Pointer",
      bookPrice: 2525,
      bookUpdatedTime: "2020-06-04T19:19:39",
      bookVerified: true,
      noOfBooks: 50,
      reviewRating: [],
      sellerName: "Geeth",
    },
    
  ];
  token: String;
  //books: Array<Book> = [];
  //bookdto: Seller = new Seller();
  unVerifiedBooks: [];
  unverifiedBooks() {
    }

  both: boolean = true;
  disapprove: boolean = false;
  approve: boolean = false;
  onDisApprove(book: any) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = {
      bookId: book.bookId,
    };
   // const dialogRef = this.dialog.open(VerifyconfrimComponent, dialogConfig);
    // dialogRef.afterClosed().subscribe((result) => {
    //   this.books.splice(0);
    //   this.unverifiedBooks();
    // });
  }

  status: any;
  onApprove(book: any) {
    console.log(book);
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = {
      bookId: book.bookId,
    };

  }

  getprofileLink() {
   
  }
  file: File;
  fileChange(event: any) {
   
  }
}
