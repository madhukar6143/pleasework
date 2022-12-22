import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Data2Service } from '../data2.service';

@Component({
  selector: 'app-salad',
  templateUrl: './salad.component.html',
  styleUrls: ['./salad.component.css']
})
export class SaladComponent implements OnInit {

  mydata:any[]=[
    {
      "id": 19,
      "imgPath": "https://media.istockphoto.com/photos/vegan-detox-buddha-bowl-with-turmeric-roasted-chickpeas-greens-picture-id1130112004?k=6&m=1130112004&s=612x612&w=0&h=qFP9ca2RkcBWTHzjNvYXBr1EZuJa_P4XXZ9iWQbRpTc=",
      "name": "Vegan Detox",
      "description": "Turmeric roasted chickpeas",
      "price": 300
    },
    {
      "id": 20,
      "imgPath": "https://media.istockphoto.com/photos/vegetable-salad-with-salted-salmon-picture-id1136194600?k=6&m=1136194600&s=612x612&w=0&h=2GTIcEbgjvGf2JimGZi1nHBrMh8j_x8C-IBvyqc3YgU=",
      "name": "Capsicum Salad",
      "description": "Red and yellow capsicums",
      "price": 400
    },
    {
      "id": 21,
      "imgPath": "https://media.istockphoto.com/photos/homemade-autumn-apple-walnut-spinach-salad-picture-id598567824?k=6&m=598567824&s=612x612&w=0&h=pxfsFUAwdDqWJZ2u8nIJ7lePEhvXLFdH-6MhgY0ZxFA=",
      "name": "Apple Salad",
      "description": "Apple, walnuts and spinach",
      "price": 500
    },
    {
      "id": 22,
      "imgPath": "https://media.istockphoto.com/photos/quinoa-salad-with-beet-root-and-spinach-picture-id937016542?k=6&m=937016542&s=612x612&w=0&h=DwVpTErBQCHz4Zr9pUgtEYhXyU9tvzGEWSpBckNTRZU=",
      "name": "Beetroot Salad",
      "description": "Beetroot and spinach",
      "price": 350
    },
    {
      "id": 23,
      "imgPath": "https://media.istockphoto.com/photos/vegetable-salad-with-tuna-and-avocado-picture-id1182647585?k=6&m=1182647585&s=612x612&w=0&h=37JvY7psEXApAAk4Q67S3afLbymelyYWk9AGe0jU104=",
      "name": "Tuna Salad",
      "description": "Tuna and avacado",
      "price": 450
    },
    {
      "id": 24,
      "imgPath": "https://media.istockphoto.com/photos/salad-with-arugula-spinach-figs-and-goat-cheese-overhead-scene-picture-id608518120?k=6&m=608518120&s=612x612&w=0&h=Mn8qGOqLJQD9tbdccL-YtaB8dlVOf9UfeVBCTkeI-vk=",
      "name": "Figs Salad",
      "description": "Spinach, arugula, figs",
      "price": 550
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
 
 
 
 