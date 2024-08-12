import { Injectable } from '@angular/core';
import { type Payload_Order } from '../app.type';

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
    handleFormatDataOrder(payload: Payload_Order){
      return {
        data: {
          payload
        }
      }
    }
}