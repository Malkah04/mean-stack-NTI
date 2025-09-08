import { Component } from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css'],
})
export class TaskComponent {
  src =
    'https://www.shutterstock.com/image-photo/awesome-pic-natureza-600nw-2408133899.jpg';
  name = 'malak';
  email = 'malak@gmail.com';
  title = 'full stack';
  yes = false;

  clik() {
    this.yes = !this.yes;
  }
  text = '';
  iEmail = '';

  n = 0;
  count() {
    this.n++;
  }
}
