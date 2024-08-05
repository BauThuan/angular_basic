import { Component, inject } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  private userService = inject(UserService)
  private router: Router | any
  fakeData = {
    "identifier": "thuan56789@gmail.com",
    "password": "password"
    }

   ngOnInit(){
    this.userService.loginUser(this.fakeData).subscribe({
    next:(data) => {
      console.log("check login user", data)
      localStorage.setItem('jwt', data.jwt)
      this.router.navigate(['/heroes']);
    },
    error: (error) =>  console.log(">>> check error", error),
    complete: () => console.log('Login Success !')
  })
  }
}
