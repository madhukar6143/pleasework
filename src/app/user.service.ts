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
    
    username: 'string';
    
};

  createUser(userObj):Observable<any>{
    return  this.hc.post("/user/createuser",userObj)
  }

  loginUser(credentials):Observable<any>{
    
    console.log("yeah bro from user services ",credentials)
    return  this.hc.post("/user/login",credentials)
  }




  getUser(username):Observable<any>{
      return this.hc.get(`/user/getuser/${username}`)
  }

 
 getAllUser():Observable<any>{
  console.log("in servives serase")
    return this.hc.get('/addtocart')
}


  deleteUser(){

  }

  updateUser(){

  }
}