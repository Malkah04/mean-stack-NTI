import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentComponent } from './components/student/student.component';
import { FormsModule } from '@angular/forms';
import { TaskComponent } from './components/task/task.component';
import { HeaderComponent } from './components/header/header.component';
import { Task2Component } from './components/task2/task2.component';
import { HighlightDirective } from './components/highlight/highlight.component';
import { StudentsComponent } from './components/students/students.component';
import { SingleStydentComponent } from './components/single-stydent/single-stydent.component';
import { ProductsComponent } from './components/products/products.component';
import { ProductComponent } from './components/product/product.component';
import { AuthComponent } from './components/auth/auth.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentComponent,
    TaskComponent,
    HeaderComponent,
    Task2Component,
    HighlightDirective,
    StudentsComponent,
    SingleStydentComponent,
    ProductsComponent,
    ProductComponent,
    AuthComponent,
    ProductDetailsComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
