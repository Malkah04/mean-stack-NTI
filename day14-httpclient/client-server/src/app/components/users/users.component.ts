import { Component } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent {
  user: any[] = [];
  constructor(private userService: UsersService) {}
  ngOnInit(): void {
    this.getusers();
  }
  getusers() {
    this.userService.getUsers().subscribe((data) => {
      this.user = data;
    });
  }

  newUser = { username: 'malak', email: 'malak@gmail.com', password: '122222' };
  addUser() {
    this.userService.createUser(this.newUser).subscribe((data) => {
      console.log(data);
      this.getusers();
    });
  }

  deleteUser(id: number) {
    this.userService.delete(id).subscribe((data) => {
      console.log(id);
    });
  }
}
