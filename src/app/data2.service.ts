import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class Data2Service {

  constructor(private hc:HttpClient,private un:UserService) { }


  // get what items present in cart of respective user after login
  getFromAddToCart():Observable<any>
  {
    let username=this.un.sharedUser.username
  return this.hc.get<any>(`items/addtocart/${username}`)
 }



 callBackend():Observable<any>
 {
  console.log("called from componet")
 return this.hc.get<any>('addtocart')
}


// pos

 // post to cart from compnents   to respective user  cart after login
 postToAddToCart(obj):Observable<any>
 {
  let username=this.un.sharedUser.username
 return this.hc.post<any>(`items/addToCartFromComponent/${username}`,obj)
 
}


// help to remove unwanted items from cart 
deleteDataUsingId(obj):Observable<any>
 {
  
  let username=this.un.sharedUser.username
 return this.hc.post<any>(`items/removeFromCartFromComponent/${username}`,obj)
 
}

userLoginStatus():boolean{
    if(localStorage.getItem("username")==null){
      return false;
    }
    else{
      return true;
    }
  }

logout(){
    localStorage.clear();
  }
}


/*
there functions whene we had data in db.json

  getSoupData():Observable<any>
  {
    return this.hc.get<any>("/items/soups")
  }

  getBiryaniData():Observable<any>
  {
    return this.hc.get<any>("/items/biryani")
  }

  getPizzasData():Observable<any>
  {
    return this.hc.get<any>("/items/pizzas")
  }

  getSaladsData():Observable<any>
  {
    return this.hc.get<any>("/items/salads")
  }
  getGrillData():Observable<any>
  {
    return this.hc.get<any>("/items/grill")
  }

  getFishData():Observable<any>
  {
    return this.hc.get<any>("/items/fish")
  }
  getPrawnsData():Observable<any>
  {
    return this.hc.get<any>("/items/prawns")
  }

  getCrabsData():Observable<any>
  {
    return this.hc.get<any>("http://localhost:3000/crabs")
  }

  getVegCurriesData():Observable<any>
  {
    return this.hc.get<any>("http://localhost:3000/vegcurries")
  }
  getNonVegCurriesData():Observable<any>
  {
    return this.hc.get<any>("http://localhost:3000/nonvegcurries")
  }
  getRotiesData():Observable<any>
  {
    return this.hc.get<any>("http://localhost:3000/roti")
  }
  getCakesData():Observable<any>
  {
    return this.hc.get<any>("https://localhost:3000/cakes")
  }
  getIceCreamsData():Observable<any>
  {
    return this.hc.get<any>("https://localhost:3000/icecreams")
  }
  getDrinksData():Observable<any>
  {
    return this.hc.get<any>("https://localhost:3000/drinks")
  }
  getMenuData():Observable<any>
  {
    return this.hc.get<any>("https://localhost:3000/menu")
  }

*/