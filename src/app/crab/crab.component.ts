import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Data2Service } from '../data2.service';

@Component({
  selector: 'app-crab',
  templateUrl: './crab.component.html',
  styleUrls: ['./crab.component.css']
})
export class CrabComponent implements OnInit {

  mydata:any[]=[
    {
      "id": 43,
      "imgPath": "https://media.istockphoto.com/photos/chilli-crab-asia-cuisine-picture-id482141392?k=6&m=482141392&s=612x612&w=0&h=hrm6ZSsSbvZV95_0cDg9dpIqkcHSnrxad34Io8eeTBo=",
      "name": "Chili crab",
      "description": "Singapore, Thailand Chilli Crab with asia cuisine.",
      "price": 899
    },
    {
      "id": 44,
      "imgPath": "https://media.istockphoto.com/photos/soft-shell-crab-meal-picture-id990424892?k=6&m=990424892&s=612x612&w=0&h=huwEmK_qwjZLDE9Pxr0kg8rbDis1eP6J3t9wE999I7c=",
      "name": "Soft shell crab",
      "description": "Deep fried soft shell crab garnished with basil.",
      "price": 1099
    },
    {
      "id": 45,
      "imgPath": "https://media.istockphoto.com/photos/snow-crab-legs-picture-id174947120?k=6&m=174947120&s=612x612&w=0&h=eX7H3K1hO1gVPtGKqw1WG3LPdl9AniAoj9dEdKUk0FI=",
      "name": "Snow Crab Legs",
      "description": "Snow Crab Legs with lemon and mango juice.",
      "price": 999
    },
    {
      "id": 46,
      "imgPath": "https://media.istockphoto.com/photos/cooked-crab-on-hot-pot-and-dark-background-seafood-boiled-red-stone-picture-id1155333207?k=6&m=1155333207&s=612x612&w=0&h=lQVp7ajypl3TtiALjVRqC7ZZHpI6Fv0VZTQLB2fEimY=",
      "name": "Boiled lobster",
      "description": "Boiled red lobster with lemon and parsley herbs.",
      "price": 899
    },
    {
      "id": 47,
      "imgPath": "https://media.istockphoto.com/photos/crabs-tentacles-with-wite-wine-lemon-herbs-sauce-slate-background-picture-id638688772?k=6&m=638688772&s=612x612&w=0&h=BhYfXyovXCvFLcqLr872UTGFIjmkJ0mJfB4Q5iCqi6U=",
      "name": "Crabs tentacles",
      "description": "Crabs tentacles with wite wine and herbs sauce.",
      "price": 999
    },
    {
      "id": 48,
      "imgPath": "https://media.istockphoto.com/photos/singapore-chili-crab-picture-id491117878?k=6&m=491117878&s=612x612&w=0&h=Et5h79zgOirwU4QRVPbW8WX4efLXWCWt1RdJJollILw=",
      "name": "Singapore chili crab",
      "description": "Singapore chili crab  masala with fried mantou.",
      "price": 789
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
 
 
 
 