import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DisplaybooksComponent } from './components/displaybooks/displaybooks.component';
import { UserBooksComponent } from './components/user-books/user-books.component';

const routes: Routes = [
  {
    path:'login',
    component: LoginComponent
  },
  {
    path:'register',
    component: RegisterComponent
  },
    {
      path: "dashboard",
    component: DashboardComponent,
    children: [
      { path: "books", component: DisplaybooksComponent },
      {path : 'userbooks',component : UserBooksComponent}
    ],
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
