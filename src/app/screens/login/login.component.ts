import { Component, signal } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgIf } from '@angular/common';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { DataFormatService } from '../../shared/data-format.service';
import { LIST_ROUTER } from '../../app.constant';


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
  ngOnInit(){
    if(this.token()){
      return this.router.navigate([`/${LIST_ROUTER.TODO_LIST}`]);
    } 
    return this.router.navigate([`/${LIST_ROUTER.LOGIN}`]);;
  }

  handleUserLogin() {
    const formattedData = this.format.handleFormatDataLogin(
      this.form.value.email, 
      this.form.value.password
    );
    this.user.loginUser(formattedData).subscribe({
      next: data => {
        console.log('>>> Check data', data);
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
