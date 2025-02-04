import { Component } from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import { MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { UserService } from '../../services/user.service';
import { User } from '../../interface/user';
import { error } from 'console';
import { response } from 'express';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatButtonModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {

  formRegister: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required])
  })


  constructor(private userService: UserService, private router: Router){
  }


  onSubmit(){
    const user: User = this.formRegister.value

    this.userService.register(user)
      .then(response => {
        console.log(response);
        this.router.navigate(['/login']);
      })
      .catch(
        error => console.log("algo")
      )
  }


}
