import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class Data2Service {

  constructor(private hc:HttpClient,private un:UserService) { }

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
    return this.hc.get<any>("http://localhost:3000/cakes")
  }
  getIceCreamsData():Observable<any>
  {
    return this.hc.get<any>("http://localhost:3000/icecreams")
  }
  getDrinksData():Observable<any>
  {
    return this.hc.get<any>("http://localhost:3000/drinks")
  }
  getMenuData():Observable<any>
  {
    return this.hc.get<any>("http://localhost:3000/menu")
  }


  getFromAddToCart():Observable<any>
  {
    let username=this.un.sharedUser.username
  return this.hc.get<any>(`/items/addtocart/${username}`)
 }



 getFromAddToCar(obj):Observable<any>
 {

  
  let username=this.un.sharedUser.username
 return this.hc.post<any>(`/items/removeFromCartFromComponent/${username}`,obj)
 
   
}


 postToAddToCart(obj):Observable<any>
 {
  let username=this.un.sharedUser.username
 return this.hc.post<any>(`/items/addToCartFromComponent/${username}`,obj)
 
}



deleteDataUsingId(id):Observable<any>
 {
  let username=this.un.sharedUser.username
 return this.hc.post<any>(`/items/removeFromCartFromComponent/${username}`,id)
 
}

 ydeleteDataUsingId(id):Observable<any[]>
 {
   return this.hc.delete<any[]>('http://localhost:3000/addtocart/'+id)
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
