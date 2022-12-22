import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Data2Service } from '../data2.service';

@Component({
  selector: 'app-nonvegcurry',
  templateUrl: './nonvegcurry.component.html',
  styleUrls: ['./nonvegcurry.component.css']
})
export class NonvegcurryComponent implements OnInit {

  mydata:any[]= [
    {
      "id": 55,
      "imgPath": "https://media.istockphoto.com/photos/chicken-tikka-masala-picture-id579767430?k=6&m=579767430&s=612x612&w=0&h=CAdNhmF0so4IT2UCj9mmWYhrh6qRfsyAnsbB_OSLECM=",
      "name": "Chicken Tikka Masala",
      "price": 337,
      "description": "Chicken tikka cooked in rich fenugreek flavoured tomato gravy"
    },
    {
      "id": 56,
      "imgPath": "https://media.istockphoto.com/photos/chicken-curry-creamy-chicken-butter-picture-id1227594550?k=6&m=1227594550&s=612x612&w=0&h=muS-8AmblRR-h_6APEslb_z6GV8924UV8WpmJMZ8hlY=",
      "name": "Kadai Chicken",
      "price": 330,
      "description": "Kadai Chicken (with bone) cooked in flavoured gravy ..."
    },
    {
      "id": 57,
      "imgPath": "https://media.istockphoto.com/photos/butter-chicken-curry-indian-food-picture-id666559376?k=6&m=666559376&s=612x612&w=0&h=2EXnJd7Q32y9HMHadgLsac3QO_eSr44FDgxNHoG1VcQ=",
      "name": "Murgh Musallam",
      "price": 354,
      "description": "Chicken  curry enriched with spiced minced lamb & boiled egg"
    },
    {
      "id": 58,
      "imgPath": "https://media.istockphoto.com/photos/nawabi-food-mutton-tikka-kebabs-this-types-of-food-are-too-flavourful-picture-id1186963323?k=6&m=1186963323&s=612x612&w=0&h=FP2GknWZ2ayYHnmNqqL8LRc68cJXn89VzcMZUl6TpIU=",
      "name": "Chicken Nawabhi",
      "price": 349,
      "description": "Shredded chicken simmered in fenugreek flavoured mild gravy"
    },
    {
      "id": 59,
      "imgPath": "https://media.istockphoto.com/photos/tandoori-chicken-picture-id911502736?k=6&m=911502736&s=612x612&w=0&h=R7dZsMKNBWinaZlgkIp5UCBbvCipPZLpn9hPxKvVprU=",
      "name": "Chicken Khandhari",
      "price": 429,
      "description": "Khandhari is Shredded chicken simmered in a rich aromatic gravy."
    },
    {
      "id": 60,
      "imgPath": "https://media.istockphoto.com/photos/kashmiri-rogan-josh-picture-id1217568307?k=6&m=1217568307&s=612x612&w=0&h=yhaVxKLI2vc_zovk3Gj50Ub9zSg9q0jkUPbdvpYQQZ8=",
      "name": "Mutton Rogan Josh",
      "description": "Tender mutton pieces simmered in a tomato onion gravy",
      "price": 499
    },
    {
      "id": 61,
      "name": "Kadai Gosht",
      "imgPath": "https://media.istockphoto.com/photos/mutton-curry-or-or-masala-gosht-or-indian-lamb-rogan-josh-picture-id879625018?k=6&m=879625018&s=612x612&w=0&h=uvIqwWKh_vbCZ9MB-BttqG1gnc6p9Z52ONIrpwN6G_g=",
      "description": "Mutton cooked till soft and finished in a wok with bell peppers ",
      "price": 499
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
 
 
 
 