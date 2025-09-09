import { Component } from '@angular/core';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css'],
})
export class StudentsComponent {
  students = [
    { id: 1, name: 'malak', grade: 3 },
    { id: 2, name: 'menna', grade: 4 },
    { id: 3, name: 'esraa', grade: 1 },
    { id: 4, name: 'walaa', grade: 2 },
    { id: 5, name: 'aya', grade: 5 },
  ];

  newStd: any[] = [];
  onStdUpdate(std: any) {
    this.newStd.push(std);
  }
}
