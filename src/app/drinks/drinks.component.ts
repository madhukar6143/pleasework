import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Data2Service } from '../data2.service';

@Component({
  selector: 'app-drinks',
  templateUrl: './drinks.component.html',
  styleUrls: ['./drinks.component.css']
})
export class DrinksComponent implements OnInit {

  mydata:any[]=[
    {
      "id": 80,
      "name": "OLD PASSIONED",
      "imgPath": "https://themocktailcompany.com/wp-content/uploads/2019/07/passioned-img-6-555x712.jpg",
      "description": "An Orange and Passionfruit drink Sparkling",
      "price": 549
    },
    {
      "id": 81,
      "name": "PINO COLADA",
      "imgPath": "https://themocktailcompany.com/wp-content/uploads/2019/07/pino-img-5-555x712.jpg",
      "description": "A pina colada inspired drink Still, coconut, pineapple, and cream.",
      "price": 549
    },
    {
      "id": 82,
      "name": "NOJITO",
      "imgPath": "https://themocktailcompany.com/wp-content/uploads/2019/07/nojit-img-5-555x712.jpg",
      "description": "A mojito inspired drink. Sparkling, lemon, lime and mint.",
      "price": 449
    },
    {
      "id": 83,
      "name": "MOCKIRI",
      "imgPath": "https://themocktailcompany.com/wp-content/uploads/2019/07/mojiri-img-6-555x712.jpg",
      "description": "A strawberry daiquiri inspired drink Sparkling, strawberry and lime.",
      "price": 599
    },
    {
      "id": 84,
      "name": "MIX OF MOCKIRI AND PINO",
      "imgPath": "https://themocktailcompany.com/wp-content/uploads/2019/07/mockiri-pino-555x712.jpg",
      "description": "A pina colada inspired drink Still, coconut, pineapple and cream.",
      "price": 399
    },
    {
      "id": 85,
      "name": "MIX OF NOJITO AND PASSIONED",
      "imgPath": "https://themocktailcompany.com/wp-content/uploads/2019/07/nojito-passioned-555x712.jpg",
      "description": "An Orange and Passionfruit drink Sparkling",
      "price": "499"
    }
  ]
  similarDataCount=new Array(6).fill(0); 
  list:any[]=[]
  constructor(private Obj:Data2Service,private router:Router) { }
 
  
   ngOnInit() 
   {
     //this.getlist();  
   }
 
     getlist()
   {
   this.Obj.getDrinksData().subscribe(
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
 
 
 
 
 
 
 
 
 /*
 (
       res=>
         {
          
           this.mydata=res;
         },
       err=>
         {
           console.log("yeah error in refresh",err)
         }
        )
     this.Obj.getFromAddToCart().subscribe(
     data=>
     {
      
      console.log(data)
      console.log("yeah",this.mydata)
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
 
 */