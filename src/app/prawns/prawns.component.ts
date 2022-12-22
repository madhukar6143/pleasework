import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Data2Service } from '../data2.service';

@Component({
  selector: 'app-prawns',
  templateUrl: './prawns.component.html',
  styleUrls: ['./prawns.component.css']
})
export class PrawnsComponent implements OnInit {

  mydata:any[]=[
    {
      "id": 37,
      "imgPath": "https://media.istockphoto.com/photos/fried-black-tiger-prawns-with-herbs-and-spices-picture-id497152104?k=6&m=497152104&s=612x612&w=0&h=oTnyBymLcVmGoWsbqS2ylDnYdehMh-4Jbh90G09VTNA=",
      "name": "Tiger prawns",
      "description": "Fried tiger prawns with herbs sauce and sprinkled pepper.",
      "price": 499
    },
    {
      "id": 38,
      "imgPath": "https://media.istockphoto.com/photos/spanish-fideua-a-noodle-paella-with-king-prawns-white-fish-meat-picture-id1153256325?k=6&m=1153256325&s=612x612&w=0&h=EiXJ3XjPaHfE0u-cyI-uEz_AVJwg0PD0B5c-a33EKOU=",
      "name": "Paella with king prawns",
      "description": "Traditional Spanish Fideua, a noodle Paella with seafood.",
      "price": 799
    },
    {
      "id": 39,
      "imgPath": "https://media.istockphoto.com/photos/prawns-with-chimichurri-picture-id474164285?k=6&m=474164285&s=612x612&w=0&h=YL6g8T8aDLAoeIIpsz3YYtCrzrIIPK_z8HxFJt7odGs=",
      "name": "Prawns with chimichurri",
      "description": "King prawns with chimichurri with lemon and leafy vegetables",
      "price": 455
    },
    {
      "id": 40,
      "imgPath": "https://media.istockphoto.com/photos/pasta-with-king-prawns-picture-id183869552?k=6&m=183869552&s=612x612&w=0&h=xdR0B04dYc6iRIZOpE45n33mhGewL1cKYYjcX_BglVs=",
      "name": "Pasta with king prawns",
      "description": "Fresh linguine with king prawns and a tomato and herb sauce.",
      "price": 555
    },
    {
      "id": 41,
      "imgPath": "https://media.istockphoto.com/photos/prawn-and-spinach-pasta-picture-id184099070?k=6&m=184099070&s=612x612&w=0&h=2HMkEyOs6l867u_due1edZ4ZQ4EhiRIw3gITIHzvAtw=",
      "name": "Prawn and spinach pasta",
      "description": "King prawn linguine with spinach and roasted peppers.",
      "price": 299
    },
    {
      "id": 42,
      "imgPath": "https://media.istockphoto.com/photos/stir-fry-noodles-with-vegetables-and-shrimps-in-black-bowl-slate-top-picture-id1178916079?k=6&m=1178916079&s=612x612&w=0&h=Swt0SL8KA921EMxC82yCnwo18nW8BhpfaByoVVxRdLM=",
      "name": "Shrimp noodles",
      "description": "Stir fry noodles with vegetables and shrimps with red pepper.",
      "price": 696
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
 
 
 
 