import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Data2Service } from '../data2.service';

@Component({
  selector: 'app-soup',
  templateUrl: './soup.component.html',
  styleUrls: ['./soup.component.css']
})
export class SoupComponent implements OnInit {
  
  mydata:any[]=[
    {
      "id": 7,
      "imgPath": "https://images.unsplash.com/photo-1585251174338-f0c60c67d723?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
      "name": "Garlic creme",
      "description": "Roasted onions with rich cream ",
      "price": 500
    },
    {
      "id": 8,
      "imgPath": "https://images.unsplash.com/photo-1504669221159-56caf7b07f57?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
      "name": "Fennel salsa",
      "description": "lamb and fennel with acidity of figs",
      "price": 499
    },
    {
      "id": 9,
      "imgPath": "https://images.unsplash.com/photo-1566748805094-443c64209667?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTU1fHxzb3Vwc3xlbnwwfDB8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      "name": "Egg white soup",
      "description": "delicacy of egg whites and spices",
      "price": 500
    },
    {
      "id": 10,
      "imgPath": "https://images.unsplash.com/photo-1600845285511-12d222278dc9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80",
      "name": "Peanut mustards",
      "description": "peanuts, praline, mustard",
      "price": 570
    },
    {
      "id": 11,
      "imgPath": "https://images.unsplash.com/photo-1615444432044-413ff198ba73?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
      "name": "Fennel claims",
      "description": "lamb and fennel with basil",
      "price": 490
    },
    {
      "id": 12,
      "imgPath": "https://images.unsplash.com/photo-1603076041992-62e7451c7800?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=762&q=80",
      "name": "King Fish",
      "description": "Fish and citrus with fennel",
      "price": 500
    }
  ]
  similarDataCount=new Array(6).fill(0); 
  list:any[]=[]
  constructor(private Obj:Data2Service,private router:Router) { }
 
  
   ngOnInit() 
   {
     this.getlist();  
   }
 
     getlist()
   {
 
     this.Obj.getFromAddToCart().subscribe(
     data=>
     {
       this.list=data.message;
       let i=0;
       for(let p of this.mydata)
      { 
          for(let s of this.list)
            {
                  if(p.name==s.name)  
                { 
                    this.similarDataCount[i]=1;         
                 }
             }
          i++
        }
      },
     err=>
     {
       console.log("error in refresh wishlist",err)
     }
    )
   }
 
 
   //go to cart from present component
   goToCart()
   {
     this.router.navigateByUrl('addtocart')
   }
 
 
   //add to cart
   addToCart(obj,ind)
   {
     this.similarDataCount[ind]=1;
     this.Obj.postToAddToCart(obj).subscribe(
     res=>
     { 
      console.log("Added to Cart")
     },
     err=>
     {
       console.log("error in Adding to Cart ",err)
     }
   )
   }
 
 
 
 //remove from Cart using id
   removeFromCart(id,ind)
   { 
       this.similarDataCount[ind]=0
       this.Obj.deleteDataUsingId(id).subscribe
       (
       data=>{
           console.log("data added to cart")
       },
       err=>
       {
         console.log("error in reading",err)
       }
       ) 
   }
 
 
   check(ind)
   {
     if(this.similarDataCount[ind]==0)
     return 1;
     else
     return 0;
   }
 
 
   
 }
 
 
 
 