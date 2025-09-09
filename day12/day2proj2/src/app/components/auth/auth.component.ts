import { Component } from '@angular/core';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
})
export class AuthComponent {
  showLogin = true;
  users = [
    { userName: 'malak', password: 1234 },
    { userName: 'mariem', password: 1234 },
    { userName: 'walaa', password: 1234 },
    { userName: 'doaa', password: 1234 },
    { userName: 'aya', password: 1234 },
  ];
  userName = '';
  password: number | null = null;
  validUser = false;
  regErr = '';

  toggleForm(event: Event) {
    event.preventDefault();
    this.showLogin = !this.showLogin;
    this.regErr = '';
  }

  doneLogin = false;

  login(user: string, password: number | any) {
    const exist = this.users.find(
      (e) => e.userName === user && e.password === Number(password)
    );
    if (exist) {
      this.validUser = true;
      this.regErr = 'login successfully';
      this.doneLogin = true;
      return;
    }
    this.regErr = 'user not exist';
  }
  register(user: string, password: number | any) {
    if (user === '' || password == null) {
      this.regErr = 'userName and password are required';
      return;
    }
    const exist = this.users.find((e) => e.userName === user);
    if (exist) {
      this.regErr = 'you already have an account';
      return;
    }
    this.doneLogin = true;
    this.users.push({ userName: user, password });
    this.regErr = 'user sign up';
  }
}
