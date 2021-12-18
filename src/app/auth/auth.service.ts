import { Injectable } from "@angular/core";

import { HttpClient } from "@angular/common/http";
import {loginCredentials} from "src/app/shared/models/loginCredentials";
import { StorageService } from "src/app/shared/services/storage.service";
import { loginAPI} from "src/app/api.constants";

@Injectable({
    providedIn: 'root',
  })

  export class AuthService {

  constructor(
    private http: HttpClient,
    private storageService: StorageService, ) {}

  get IsLoggedIn() {
    return this.storageService.existsStorage('user');
  }

  signInUser(user: loginCredentials) {
    return this.http.post(`${loginAPI}`, user);
  }

  getUser() {
    if (this.storageService.existsStorage('user')) {
      return this.storageService.getUser();
    }
  }

  // registerCustomer(user: User) {
  //   return this.http.post(`${registerAPI}`, user);
  // }

  // recommendedBy() {
  //   const params = `?offset=0&limit=10`
  //   return this.http.get(`${recommendedBy}` + params);
  // }

  // updatedPassword(userPassword) {
  //   return this.http.put(`${userChangePassword}`, userPassword);
  // }

  // updatedUserProfile(userInfo) {
  //   return this.http.put(`${updatedUserInfo}`, userInfo);
  // }

  // resetPassword(email: any, url: string) {
  //   return this.http.post(`${resetPassword}`, {email, url})
  // }

}
