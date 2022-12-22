import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {UserService} from '../user.service'

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private us:UserService,private router:Router) { }

  cart:Object=[]
  ngOnInit(): void {
  }

  onSignup(userObj){
   
   /* var newObj=
    {
      username: userObj.username, 
      number: userObj.number,
      email: userObj.email,
      password: userObj.password,
      cart:this.cart
    }
    */
    this.us.createUser(userObj).subscribe(
      res=>{
        if(res.message==="User created"){
          alert("User created")
          //navigate to login component
            this.router.navigateByUrl("/login")
        }
        else{
          alert(res.message)
        }
      },
      err=>{
        console.log(err)
        alert("Something went wrong in user creation")
      }
    )
  }

}
