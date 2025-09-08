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

@NgModule({
  declarations: [
    AppComponent,
    StudentComponent,
    TaskComponent,
    HeaderComponent,
    Task2Component,
    HighlightDirective,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
