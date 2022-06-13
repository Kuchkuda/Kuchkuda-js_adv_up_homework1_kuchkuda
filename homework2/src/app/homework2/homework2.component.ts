import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homework2',
  templateUrl: './homework2.component.html',
  styleUrls: ['./homework2.component.scss'],
})
export class Homework2Component implements OnInit {
  public arrElem: Array<any> = [];
  public regExpLogin: RegExp = /^[a-z0-9]{4,16}$/i;
  public regExpPass: RegExp = /^[a-z0-9]{4,16}$/i;
  public regExpEmail: RegExp =
    /^[\w-.]{1,}@{1,1}[\w-.]{0,}net.ua|[\w-.]{1,}@{1,1}[\w-.]{0,}org.ua|[\w-.]{1,}@{1,1}[\w-.]{0,}gmail.com$/;
  public loginValue: string = '';
  public passValue: string = '';
  public emailValue: string = '';
  public checkLogin: boolean = false;
  public checkPass: boolean = false;
  public checkEmail: boolean = false;
  public editStatus: boolean = true;
  public editIndex: number = 0;

  constructor() {}

  ngOnInit(): void {}

  login(): void {
    if (this.regExpLogin.test(this.loginValue)) {
      this.checkLogin = true;
    } else {
      this.checkLogin = false;
    }
  }

  pass(): void {
    if (this.regExpPass.test(this.passValue)) {
      this.checkPass = true;
    } else {
      this.checkPass = false;
    }
  }

  email(): void {
    if (this.regExpEmail.test(this.emailValue)) {
      this.checkEmail = true;
    } else {
      this.checkEmail = false;
    }
  }

  add(): void {
    const obj = {
      login: this.loginValue,
      pass: this.passValue,
      email: this.emailValue,
    };
    if (
      this.regExpLogin.test(obj.login) &&
      this.regExpPass.test(obj.pass) &&
      this.regExpEmail.test(obj.email)
    ) {
      this.arrElem.push(obj);
    }
    this.loginValue = '';
    this.passValue = '';
    this.emailValue = '';
  }

  edit(index: any): void {
    this.loginValue = this.arrElem[index].login;
    this.passValue = this.arrElem[index].pass;
    this.emailValue = this.arrElem[index].email;
    this.editStatus = false;
    this.editIndex = index;
  }

  save(): void {
    this.editStatus = true;
    const obj = {
      login: this.loginValue,
      pass: this.passValue,
      email: this.emailValue,
    };
    if (
      this.regExpLogin.test(obj.login) &&
      this.regExpPass.test(obj.pass) &&
      this.regExpEmail.test(obj.email)
    ) {
      this.arrElem[this.editIndex].login = this.loginValue;
      this.arrElem[this.editIndex].pass = this.passValue;
      this.arrElem[this.editIndex].email = this.emailValue;
    }

    this.loginValue = '';
    this.passValue = '';
    this.emailValue = '';
  }

  delete(index: any): void {
    this.arrElem.splice(index, 1);
  }
}
