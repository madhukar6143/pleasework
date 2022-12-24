import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {


  //inject http client object
  constructor(private hc:HttpClient) { }

  userLoginStatus=false;

  sharedUser: {
    // your properties here... e.g
    // gloab username dclartion so every compnent can access it
    username: 'string';
    
};


//user login 
  createUser(userObj):Observable<any>{
    return  this.hc.post("user/createuser",userObj)
  }


  //user login 
  loginUser(credentials):Observable<any>{
    return  this.hc.post("user/login",credentials)
  }



// get data of a user not neeeded for this project as of noe
  getUser(username):Observable<any>{

      return this.hc.get(`user/getuser/${username}`)
  }

 



  deleteUser(){

  }

  updateUser(){

  }
}