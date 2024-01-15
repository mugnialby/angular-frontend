import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { UserAddRequest } from '../../../../../models/dto/master/users/UserAddRequest';

@Component({
  selector: 'app-user-grid',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './user-grid.component.html',
  styleUrl: './user-grid.component.css'
})
export class UserGridComponent {
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
