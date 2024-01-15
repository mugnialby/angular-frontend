import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { UserAddRequest } from '../../../../../models/dto/master/users/UserAddRequest';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-form',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, FormsModule],
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
    console.log(this.userAddRequest.userName);
    console.log(this.userAddRequest.password);
    console.log(this.userAddRequest.firstName);
    console.log(this.userAddRequest.lastName);
    console.log(this.userAddRequest.email);
  }
}
