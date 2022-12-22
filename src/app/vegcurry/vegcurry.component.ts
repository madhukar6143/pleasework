import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Data2Service } from '../data2.service';

@Component({
  selector: 'app-vegcurry',
  templateUrl: './vegcurry.component.html',
  styleUrls: ['./vegcurry.component.css']
})
export class VegcurryComponent implements OnInit {

  mydata:any[]= [
    {
      "id": 49,
      "name": "Dal Fry",
      "price": 229,
      "imgPath": "https://media.istockphoto.com/photos/yellow-lentil-soup-or-arhar-daal-picture-id585796696?k=6&m=585796696&s=612x612&w=0&h=IYP_YcttG--jZHJWmM1CSP-QOeeAQfG9iml_botzJPo=",
      "description": "A rich blend of split red and yellow gram, garnished with  butter"
    },
    {
      "id": 50,
      "name": "Dal Makhani",
      "price": 229,
      "imgPath": "https://media.istockphoto.com/photos/dal-makhani-or-daal-makhani-indian-lunchdinner-menu-picture-id530506394?k=6&m=530506394&s=612x612&w=0&h=Rl3MRtPu80jJXH10NN4flAdENpupI5uw5MH7ZQiuVyM=",
      "description": "Simmered black gram and red kidney beans finished with butter "
    },
    {
      "id": 51,
      "name": "Paneer Butter Masala",
      "price": 229,
      "imgPath": "https://media.istockphoto.com/photos/kadai-paneer-picture-id486066908?k=6&m=486066908&s=612x612&w=0&h=_Uf6d8Vt-XXUK0gFe7uOawK3xmH5rCdmg1wa-9u_g8c=",
      "description": " Cottage cheese cooked in a rich butter cream sauce."
    },
    {
      "id": 52,
      "name": "Palak Paneer",
      "price": 229,
      "imgPath": "https://media.istockphoto.com/photos/palak-paneer-or-spinach-and-cottage-cheese-curry-on-a-dark-background-picture-id1146291429?k=6&m=1146291429&s=612x612&w=0&h=08KHEApmx0Fu0-Hy_ErEhbig3OshMEHjtThtdwRocUY=",
      "description": "Cottage cheese cooked in spinach puree steeped in rich cashew ."
    },
    {
      "id": 53,
      "name": "Paneer Do Pyaza",
      "imgPath": "https://media.istockphoto.com/photos/paneer-do-pyaza-is-a-popular-punjabi-vegetarian-recipe-using-cubes-of-picture-id1085144774?k=6&m=1085144774&s=612x612&w=0&h=i6f1DpERi2hxFcBhw13hiDZd2uo6gQpBjiDOe6Z1Z0c=",
      "price": 229,
      "description": "Assorted vegetables and paneer  steeped in rich cashew gravy."
    },
    {
      "id": 54,
      "name": "Methi Chaman",
      "imgPath": "https://media.istockphoto.com/photos/aalu-methi-dry-curry-picture-id1136715225?k=6&m=1136715225&s=612x612&w=0&h=T3RN0KLiOsS6jTJU43uDiKVi4jeRPucclN4Qj6vAiUg=",
      "description": "Aromatic blend of paneer, spinach an fresh fenugreek leaves",
      "price": 241
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
 
 
 
 