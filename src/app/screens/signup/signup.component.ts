import { Router } from '@angular/router';
import { Component, signal } from '@angular/core';
import { UserService } from '../../services/user.service';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';
import { DataFormatService } from '../../shared/data-format.service';
import { LIST_ROUTER } from '../../app.constant';
@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})

export class SignupComponent {
  form = new FormGroup({
    username: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl('')
  })
  isShowRequired = signal<boolean>(false)
  constructor(
    private user : UserService,
    private format: DataFormatService,
    private router: Router
  ){}
  handleSignUpUser(){
    const formatDataSignUp = this.format.handleFormatDataSignUp(
      this.form.value.username,
      this.form.value.email,
      this.form.value.password
    )
    this.user.SignUpUser(formatDataSignUp).subscribe({
      next: data => console.log(data),
      error: err => console.log(err),
      complete: () => {
        this.router.navigate([`/${LIST_ROUTER.PRODUCT_LIST}`])
        console.log(`SignUp Success!`)
      }
    })
  }  
 
}
