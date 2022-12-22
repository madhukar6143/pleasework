import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Data2Service } from '../data2.service';

@Component({
  selector: 'app-icecreams',
  templateUrl: './icecreams.component.html',
  styleUrls: ['./icecreams.component.css']
})
export class IcecreamsComponent implements OnInit {

  mydata:any[]=[
    {
      "id": 74,
      "imgPath": "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F1032706.jpg&w=272&h=272&c=sc&poi=face&q=85",
      "name": "Vanilla Ice Cream V",
      "description": "No-cook, no eggs, made with half-and-half and cream.",
      "price": 249
    },
    {
      "id": 75,
      "imgPath": "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F435381.jpg&w=272&h=272&c=sc&poi=face&q=85",
      "name": "Ice Cream Base",
      "description": "A custard-style ice cream base that any number of flavors can be added to.",
      "price": 199
    },
    {
      "id": 76,
      "imgPath": "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F5571405.jpg&w=272&h=272&c=sc&poi=face&q=85",
      "name": "Vegan Horchata Ice Cream",
      "description": "Flavorful rice milk is mixed with coconut cream then churned to give delight.",
      "price": 349
    },
    {
      "id": 77,
      "imgPath": "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F1586127.jpg&w=272&h=272&c=sc&poi=face&q=85",
      "name": "Super Lemon Ice Cream",
      "description": "Fresh Lemon Ice Cream is like no other ice cream you’ve ever had.",
      "price": 299
    },
    {
      "id": 78,
      "imgPath": "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F2170022.jpg&w=272&h=272&c=sc&poi=face&q=85",
      "name": "Matcha Green Tea Ice Cream",
      "description": "The Japanese green tea ice cream is not as creamy, It is sweet",
      "price": 399
    },
    {
      "id": 79,
      "imgPath": "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F815784.jpg&w=272&h=272&c=sc&poi=face&q=85",
      "name": "Strawberry Ice Cream",
      "description": "Strawberry ice cream is a flavor of ice cream made with strawberry.",
      "price": "199"
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
 
 
 
 