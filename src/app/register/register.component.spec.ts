import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-register',  
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  username: string ="";
  email: string ="";
  password: string ="";




  constructor(private http: HttpClient )
  {

  }


  save()
  {
  
    let bodyData = {
      "username" : this.username,
      "email" : this.email,
      "password" : this.password
    };
    this.http.post("http://localhost:8085/api/v1/user/save",bodyData,{responseType: 'text'}).subscribe((resultData: any)=>
    {
        console.log(resultData);
        alert("Employee Registered Successfully");

    });
  }

  signUpMode = false;

  toggleMode(signUp: boolean): void {
    this.signUpMode = signUp;
  }
}


