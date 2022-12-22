import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Data2Service } from '../data2.service';

@Component({
  selector: 'app-cake',
  templateUrl: './cake.component.html',
  styleUrls: ['./cake.component.css']
})
export class CakeComponent implements OnInit {

  mydata:any[]= [
    {
      "id": 68,
      "imgPath": "https://i7.fnp.com/images/pr/l/v20210326105752/fudge-brownie-cake_1.jpg",
      "name": "Fudge Brownie cake",
      "description": "A delicious and decadent Brownie Cake made from scratch.",
      "price": 699
    },
    {
      "id": 69,
      "imgPath": "https://i7.fnp.com/images/pr/l/v20210326105811/red-velvet-fresh-cream-cake_1.jpg",
      "name": "Red Velvet Cake",
      "description": "A Red Velvet Cake is pure delight and offset by a white Cream Cheese.",
      "price": 949
    },
    {
      "id": 70,
      "imgPath": "https://i7.fnp.com/images/pr/l/creamy-vanilla-fruit-cake_1.jpg",
      "name": "Creamy Vanilla Fruit Cake ",
      "description": " A simple, moist sponge cake layered with fresh cream and fresh fruits.",
      "price": 949
    },
    {
      "id": 71,
      "imgPath": "https://i7.fnp.com/images/pr/l/pink-strawberry-cream-cake_1.jpg",
      "name": "Pink Strawberry Cream Cake ",
      "description": "A fluffy vanilla cake is loaded with fresh strawberries and a rich whipped cream.",
      "price": 649
    },
    {
      "id": 72,
      "imgPath": "https://i7.fnp.com/images/pr/l/chocolate-caramel-fudge-cake_1.jpg",
      "name": "Chocolate Caramel Fudge Cake",
      "description": "Salted caramel chocolate fudge cake filled with salted caramel.",
      "price": 649
    },
    {
      "id": 73,
      "imgPath": "https://i7.fnp.com/images/pr/l/heavenly-oreo-cookie-cake_1.jpg",
      "name": "Heavenly Oreo Cookie Cake",
      "description": "Layers of chocolate pudding, cool whip and cream cheese.",
      "price": 899
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
 
 
 
 