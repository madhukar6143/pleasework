import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Data2Service } from '../data2.service';

@Component({
  selector: 'app-grill',
  templateUrl: './grill.component.html',
  styleUrls: ['./grill.component.css']
})
export class GrillComponent implements OnInit {

  mydata:any[]= [
    {
      "id": 25,
      "imgPath": "https://media.istockphoto.com/photos/hot-toasted-sandwich-fresh-from-the-plate-grill-picture-id1088403682?k=6&m=1088403682&s=612x612&w=0&h=jMHKQoy44qfclxzkjwR8NfdXi9yg3WboLqnSbprwZYQ=",
      "name": "Grill sandwich",
      "description": "Toast of creamy cheese",
      "price": 500
    },
    {
      "id": 26,
      "imgPath": "https://media.istockphoto.com/photos/big-homemade-sandwich-with-roast-beef-bacon-pickles-baby-spinach-and-picture-id657846890?k=6&m=657846890&s=612x612&w=0&h=XCqchKkMwS3kIQA_Ldv3-WKiD6-XvFmH49CPVp1WMAk=",
      "name": "Chicken sandwich",
      "description": "Bacon pickles, baby spinach",
      "price": 510
    },
    {
      "id": 27,
      "imgPath": "https://media.istockphoto.com/photos/roasted-sea-bream-fish-with-lemon-slices-picture-id855749956?k=6&m=855749956&s=612x612&w=0&h=MlmijvjEtfJZ2TkpZje6sM_j8q-yqfhmcqkQWdNylfM=",
      "name": "Grill fish",
      "description": "Roasted sea bream fish",
      "price": 530
    },
    {
      "id": 28,
      "imgPath": "https://media.istockphoto.com/photos/chicken-kebabs-on-a-white-platter-picture-id1019900018?k=6&m=1019900018&s=612x612&w=0&h=1sVldqNdzEEbtXO04Jl_CbelkyAE6r9v-cK_PoC5vvw=",
      "name": "BBQ Chicken",
      "description": "Roast chicken on hibachi",
      "price": 570
    },
    {
      "id": 29,
      "imgPath": "https://media.istockphoto.com/photos/paneer-tikka-kebab-picture-id849166248?k=6&m=849166248&s=612x612&w=0&h=GYzOdNF3oAcKHqJqHGmD1a586bCGpfBmNsv_zzHz-_Y=",
      "name": "Paneer kebab",
      "description": "paneer, chillies, creme",
      "price": 590
    },
    {
      "id": 30,
      "imgPath": "https://media.istockphoto.com/photos/mexican-grilled-corn-elote-picture-id479631016?k=6&m=479631016&s=612x612&w=0&h=AOYSSg4s0DVzs_hceUiGzP0Tqy3EMagFZVPLo4tPUWo=",
      "name": "Grill corn",
      "description": "Grilled corn with lemon",
      "price": 660
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
 
 
 
 