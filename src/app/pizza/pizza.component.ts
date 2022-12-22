import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Data2Service } from '../data2.service';

@Component({
  selector: 'app-pizza',
  templateUrl: './pizza.component.html',
  styleUrls: ['./pizza.component.css']
})
export class PizzaComponent implements OnInit {

  mydata:any[]=[
    {
      "id": 13,
      "imgPath": "https://images.unsplash.com/photo-1513104890138-7c749659a591?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGl6emF8ZW58MHwwfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      "name": "Tandoori paneer",
      "description": "cherries and paneer spice chillies",
      "price": 535
    },
    {
      "id": 14,
      "imgPath": "https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGl6emF8ZW58MHwwfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      "name": "Chicken Tikka",
      "description": "Tandoori masala and red paprika",
      "price": 500
    },
    {
      "id": 15,
      "imgPath": "https://images.unsplash.com/photo-1590947132387-155cc02f3212?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cGl6emF8ZW58MHwwfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      "name": "Farm house",
      "description": "Capsicum, mushrooms, tomatoes",
      "price": 559
    },
    {
      "id": 16,
      "imgPath": "https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8cGl6emF8ZW58MHwwfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      "name": "Paprikas' feast",
      "description": "red paprikas with chilli overdose",
      "price": 570
    },
    {
      "id": 17,
      "imgPath": "https://images.unsplash.com/photo-1588315029754-2dd089d39a1a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHBpenphfGVufDB8MHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      "name": "Deluxe veggie",
      "description": "chillies with roasted onion, cheese",
      "price": 590
    },
    {
      "id": 18,
      "imgPath": "https://images.unsplash.com/photo-1561350111-7daa4f284bc6?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fHBpenphfGVufDB8MHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      "name": "Smoky house",
      "description": "smoked chicken over five spices",
      "price": 1000
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
 
 
 
 