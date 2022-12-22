import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private us:UserService,private router:Router) { }

  ngOnInit(): void {
  /*  this.us.getAllUser().subscribe(
      res=>
      {
        console.log(res)
       
      },
      err=>
      {
        console.log("yeah error in refresh",err)
      }
    )
    */
  }

  onLogin(userCredentials){
    console.log("yeah bro from login",userCredentials)
    this.us.loginUser(userCredentials).subscribe(
      res=>{
        console.log("yeah bro from login after calling",userCredentials)
        if(res.message==="Login successful"){
          //save token to localstorage
          
        this.us.sharedUser = userCredentials

          localStorage.setItem("token",res.token)
          localStorage.setItem("username",res.username)
          localStorage.setItem("userObj",JSON.stringify(res.userObj))
          this.us.userLoginStatus=true;
          //navigate to user profile
          this.router.navigateByUrl("/starter")
        }
        else{
          alert(res.message)
        }
      },
      err=>{
        console.log(err)
        alert("Something went wrong in login")
      }
    )
  }

go(){
  this.router.navigateByUrl("/signup")
}

}
