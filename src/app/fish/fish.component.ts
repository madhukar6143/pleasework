import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Data2Service } from '../data2.service';

@Component({
  selector: 'app-fish',
  templateUrl: './fish.component.html',
  styleUrls: ['./fish.component.css']
})
export class FishComponent implements OnInit {

  mydata:any[]=[
    {
      "id": 31,
      "imgPath": "https://media.istockphoto.com/photos/salmon-satay-picture-id507377821?k=6&m=507377821&s=612x612&w=0&h=SUG3aUxXYAq-F12N1Hxw40csYTmryWQw-uwhfuBuLbU=",
      "name": "Salmon satay",
      "description": "Salmon satay with pesto and chili sauce and herbs.",
      "price": 499
    },
    {
      "id": 32,
      "imgPath": "https://media.istockphoto.com/photos/grilled-salmon-with-french-fries-and-vegetables-on-wooden-table-picture-id1029350810?k=6&m=1029350810&s=612x612&w=0&h=lAh7MeRsz_RWTfe5BeRjhik7GwW1GPXYgIg3nvt5BcI=",
      "name": "Grilled salmon",
      "description": "Grilled salmon with French fries and vegetables.",
      "price": 899
    },
    {
      "id": 33,
      "imgPath": "https://media.istockphoto.com/photos/tasty-grilled-fish-picture-id980462262?k=6&m=980462262&s=612x612&w=0&h=_uYUSKDJ4i-IyntucBGg1CpzoehstRcwx8dIsfGHCtQ=",
      "name": "Grilled fish",
      "description": "Tasty grilled fish with spices ,Indian cuisine pepper.",
      "price": 399
    },
    {
      "id": 34,
      "imgPath": "https://media.istockphoto.com/photos/bengali-mustard-fish-curry-fish-cooked-with-masala-in-mustard-oil-picture-id1074076592?k=6&m=1074076592&s=612x612&w=0&h=teNoG7mch0K5UrArB1XkaBBrmpKHFh7SqURPswtrT6o=",
      "name": "Bengali fish curry",
      "description": "Mustard fish Curry with masala in mustard oil.",
      "price": 625
    },
    {
      "id": 35,
      "imgPath": "https://media.istockphoto.com/photos/salmon-steak-with-cream-sauce-picture-id465877157?k=6&m=465877157&s=612x612&w=0&h=Im2l7LtLAk6fyVRwH9UWn6ckaqzpzFnZePUiu90-f5A=",
      "name": "Salmon Steak",
      "description": "Grilled Salmon on a Bed of Spinach, Cream Sauce.",
      "price": 799
    },
    {
      "id": 36,
      "imgPath": "https://media.istockphoto.com/photos/fish-fillet-with-risotto-picture-id531422126?k=6&m=531422126&s=612x612&w=0&h=17kNKZ-2e5ht99jN_Imf_A9XBMUV_chZfTHZkskGBP4=",
      "name": "Fish fillet",
      "description": "Fried white fish fillet with yellow risotto and cherry.",
      "price": 399
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
       this.list=data.message
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
 
 
 
 