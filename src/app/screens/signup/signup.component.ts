import { inject, input } from '@angular/core';
import { Component, signal } from '@angular/core';
import { UserService } from '../../services/user.service';
import { PropsDatatService } from '../../services/propsData.service';
import { type ConfigDataLogin } from '../../app.type';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})

export class SignupComponent {
  isSignUp = signal<string>('')
  email = input<string>('')
  password = input<string>('')
  private userService = inject(UserService)
  private props = inject(PropsDatatService)
  
  isShowModalSignUp(data: any){
    let dataLogin: ConfigDataLogin | any = {
      email:this.email,
      password: this.password
    }
    this.isSignUp = data
    this.userService.loginUser(dataLogin)
 }


}
