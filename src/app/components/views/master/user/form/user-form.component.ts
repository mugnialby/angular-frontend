import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { UserAddRequest } from '../../../../../models/dto/users/UserAddRequest';

@Component({
  selector: 'app-user-form',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './user-form.component.html',
  styleUrl: './user-form.component.css'
})
export class UserFormComponent {
  userAddRequest: UserAddRequest = {
    userName: '', 
    password: '', 
    firstName: '', 
    lastName: '', 
    email: ''
  }

  onSave() {
    
    console.log(this.userAddRequest);
  }
}
