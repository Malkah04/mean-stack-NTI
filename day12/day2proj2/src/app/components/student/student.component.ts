import { Component } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css'],
})
export class StudentComponent {
  isLogin = false;
  role: string = 'guest';
  student = [
    { id: 1, name: 'malak' },
    { id: 2, name: 'walaa' },
    { id: 3, name: 'mariem' },
    { id: 4, name: 'maenna' },
  ];
  // userName = 'malak';
  // lastName = 'sobhy';
  // imgSrc =
  //   'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREHjj0QVmfJLo5BrdEKQZ5td36QsOqjgTQFg&s';
  // isDisable = true;
  // val = 0;
  // count() {
  //   this.val++;
  // }

  // stdName = '';
  // constructor() {
  //   setInterval(() => {
  //     // every 2s the name change bec interval
  //     this.userName = this.userName === 'doaa' ? 'malak' : 'doaa';
  //   }, 2000);
  // }
}
