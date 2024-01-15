export class UserAddRequest {
    userName: string;
    password: string;
    firstName: string;
    lastName: string;
    email: string;
  
    constructor(
        userName: string, 
        password: string, 
        firstName: string, 
        lastName: string, 
        email: string
    ) {
        this.userName = userName;
        this.password = password;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
    }
  }