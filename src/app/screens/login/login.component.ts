import { Component, signal } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgIf } from '@angular/common';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { DataFormatService } from '../../shared/data-format.service';
import { LIST_ROUTER } from '../../app.constant';
interface MyFormControls {
  [key: string]: FormControl<any>;
}
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf, TooltipModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  form = new FormGroup({
    email: new FormControl('',{
      validators: [Validators.email, Validators.required]
    }),
    password: new FormControl('', {
      validators: [Validators.maxLength(6), Validators.required]
    })
  })
  isShowRequired = signal<boolean>(false)
  token = signal<string | null>(localStorage.getItem('jwt'))
  constructor(
    private user: UserService,
    private format: DataFormatService,
    private router: Router,
  ){}
  FormInvalid(field: string){
    const control = this.form.controls as MyFormControls;
    return control[field]?.touched && 
           control[field]?.dirty &&
           control[field]?.invalid

  }
  ngOnInit(){
    if(this.token()){
      return this.router.navigate([`/${LIST_ROUTER.TODO_LIST}`]);
    } 
    console.log(">>. chay vao");
    return this.router.navigate([`/${LIST_ROUTER.LOGIN}`]);;
  }

  handleUserLogin() {
    console.log('this is form', this.form.controls.email.touched, this.form.controls.email.dirty, this.form.controls.email.invalid );
    console.log('>>> chek data', 
        this.form.value.email,
        this.form.value.password
      )
    const formattedData = this.format.handleFormatDataLogin(
      this.form.value.email, 
      this.form.value.password
    );
    this.user.loginUser(formattedData).subscribe({
      next: data => {
        localStorage.setItem('jwt', data.jwt)
      },
      error: err => console.log(`Error ${err}`),
      complete: () => {
        this.router.navigate([`/${LIST_ROUTER.TODO_LIST}`]);
        console.log(`Login Success !`);
      },
    });
  }
}
