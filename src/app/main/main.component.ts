import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  imports: [MatButtonModule],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {

  constructor(private userService: UserService, private router: Router){

  }

  onSubmit(){
    this.userService.logout()
      .then( () => {
        this.router.navigate(['/login'])
      })
      .catch(error => console.log(error));
  }
}
