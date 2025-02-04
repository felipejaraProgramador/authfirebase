import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';
import { User } from '../../interface/user';
import { response } from 'express';
import { error } from 'console';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatButtonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  formLogin: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required])
  })


  constructor(private userService: UserService, private router: Router){
  }


  onSignIn(){
    const user: User = this.formLogin.value

    this.userService.login(user)
      .then(response => {
        console.log(response);
        this.router.navigate(['/main']);
      })
      .catch(
        error => console.log(error)
      )
  }

  redirecToRegister(){
    return this.router.navigate(['/register'])
  }


  loginWithGoogle(){
    this.userService.loginWithGoogle()
      .then( response => {
        console.log(response)
        this.router.navigate(['/main'])
      }).catch( error => console.log(error))
  }

}
