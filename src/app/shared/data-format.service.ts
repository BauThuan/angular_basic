import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataFormatService {
    handleFormatDataLogin(email: any, password: any ){
      return {
        identifier: email,
        password
      }
    }
    handleFormatDataSignUp(username: any, email: any, password: any){
      return {
        username,
        email,
        password,
        role: 3,
      }
    }
}