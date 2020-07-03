import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { UserService } from './services/user.service';

import { MatCardModule, MatInputModule, MatIconModule, MatButtonModule, MatTableModule, MatPaginatorModule, MatSortModule } from '@angular/material';
import { MatFormFieldModule } from '@angular/material/form-field';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';
import { MatMenuModule } from '@angular/material/menu';
import { MatSnackBarModule, MatSnackBar } from '@angular/material/snack-bar';
import { AppMaterial } from "./app.material.module";
import { AsyncPipe } from '../../node_modules/@angular/common';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { RegisterComponent } from './components/register/register.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DisplaybooksComponent } from './components/displaybooks/displaybooks.component';
import { BookSearchPipe } from './pipe/book-search.pipe';
import { NgxSpinnerModule } from "ngx-spinner";
import { SortbypricePipe } from './pipe/sortbyprice.pipe';
import { NgxPaginationModule } from "ngx-pagination";
import { UserBooksComponent } from './components/user-books/user-books.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,DashboardComponent, DisplaybooksComponent, BookSearchPipe, SortbypricePipe,UserBooksComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatSelectModule,
    FlexLayoutModule,
    HttpClientModule,
    NgxSpinnerModule,
    MatMenuModule,
    MatSnackBarModule,
    AppMaterial,
    BrowserModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    NgxPaginationModule,
    MatPaginatorModule,
  ],
  providers: [AsyncPipe,UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
