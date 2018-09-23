import { Injectable } from '@angular/core';
import { Simuser } from './Interface/userinfo';
import {HttpService} from './http.service';
import { user1} from './Interface/mock-user';

@Injectable({
  providedIn: 'root'
})
export class UserSigninfoService {
  isLogin = false;
  myInfo: Simuser|undefined = undefined;
  username: string;
  password: string;


  constructor(private http: HttpService) {
  }

  setUserInfobyInfo( iflogin: boolean , info: Simuser|undefined) {
    this.isLogin = iflogin;
    if ( ifSimuser(info)) {
      this.myInfo = info;
      this.myInfo.followed = true;
    } else {
     this.myInfo = undefined;
    }
  }
  setUserInfo( iflogin: boolean, info: Simuser|undefined) {
    this.isLogin = iflogin;
    this.myInfo = info;
  }
  getUserInfo() {
    return this.myInfo;
  }
  judgeIfLogin() {
  return this.isLogin;
  }
}

function ifSimuser(info: Simuser|undefined): info is Simuser {
  return (<Simuser>info).id !== undefined;
}
