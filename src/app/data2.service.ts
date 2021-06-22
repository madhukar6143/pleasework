import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Data2Service {

  constructor(private hc:HttpClient) { }

  getSoupData():Observable<any>
  {
    return this.hc.get<any>("http://localhost:3000/soups")
  }

  getBiryaniData():Observable<any>
  {
    return this.hc.get<any>("http://localhost:3000/biryani")
  }

  getPizzasData():Observable<any>
  {
    return this.hc.get<any>("http://localhost:3000/pizzas")
  }

  getSaladsData():Observable<any>
  {
    return this.hc.get<any>("http://localhost:3000/salads")
  }
  getGrillData():Observable<any>
  {
    return this.hc.get<any>("http://localhost:3000/grill")
  }

  getFishData():Observable<any>
  {
    return this.hc.get<any>("http://localhost:3000/fish")
  }
  getPrawnsData():Observable<any>
  {
    return this.hc.get<any>("http://localhost:3000/prawns")
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
    
  return this.hc.get<any>('http://localhost:3000/addtocart')
 }


 postToAddToCart(obj):Observable<any>
 {
 return this.hc.post<any>('http://localhost:3000/addtocart',obj)
 
}

 deleteDataUsingId(id: string):Observable<any[]>
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
