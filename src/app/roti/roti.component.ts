import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Data2Service } from '../data2.service';

@Component({
  selector: 'app-roti',
  templateUrl: './roti.component.html',
  styleUrls: ['./roti.component.css']
})
export class RotiComponent implements OnInit {

  mydata:any[]= [
    {
      "id": 62,
      "name": "Tandoori Roti",
      "price": 229,
      "imgPath": "https://media.istockphoto.com/photos/bread-tandoori-indian-cuisine-picture-id1150376593?k=6&m=1150376593&s=612x612&w=0&h=QgIodYl0n2qYT0DebnN-3kncYkl0wtOphTGAxES2RtY=",
      "description": "A traditional and tasty north indian flatbread  made with wheat "
    },
    {
      "id": 63,
      "name": "Rumali Roti",
      "price": 229,
      "imgPath": "https://media.istockphoto.com/photos/home-made-gluten-free-chickpea-flour-roti-or-besan-roti-or-chapati-or-picture-id1192898976?k=6&m=1192898976&s=612x612&w=0&h=Rwc9aEyaZxg5pENUJLFWWFBVhSr4kdfa2FnYV1x-_9g=",
      "description": "A type of thin Indian bread that has come from Punjabi cuisine."
    },
    {
      "id": 64,
      "name": "Butter Naan",
      "price": 229,
      "imgPath": "https://media.istockphoto.com/photos/naan-an-ovenbaked-flatbread-picture-id1219833092?k=6&m=1219833092&s=612x612&w=0&h=NdTk5vHLAEOzvjAbznkWGv80VgeEvvZUbtPg2aCFvFA=",
      "description": " A traditional soft Indian flatbread made in the tandoori oven. "
    },
    {
      "id": 65,
      "name": "Garlic Naan",
      "price": 229,
      "description": "Garlic Naan is flatbreads which is served in Indian restaurants. ",
      "imgPath": "https://media.istockphoto.com/photos/homemade-naan-bread-picture-id909879060?k=6&m=909879060&s=612x612&w=0&h=9pNXYEAH0aq5IPA2-jf0oEScnR_752EgF3mJSrkerss="
    },
    {
      "id": 66,
      "name": "Aloo Paratha",
      "price": 229,
      "imgPath": "https://media.istockphoto.com/photos/aloo-paratha-with-lassi-indian-potato-stuffed-flatbread-with-butter-picture-id1189079893?k=6&m=1189079893&s=612x612&w=0&h=dECOGNht3qdiboRmGsZtN3ICQZXSDnmacYd5zWMn6ZE=",
      "description": "Aloo paratha is a popular Indian breakfast of unleavened savory ."
    },
    {
      "id": 67,
      "name": "Butter Paratha",
      "price": 229,
      "imgPath": "https://media.istockphoto.com/photos/daikon-radish-mooli-or-muli-paratha-or-stuffed-radish-paratha-indian-picture-id682516108?k=6&m=682516108&s=612x612&w=0&h=9XpxAnC5hwsIpoSDw40tsIwsHHKeHdTlgYN-7MnpX38=",
      "description": "a healthy layered flat bread recipe prepared with butter.."
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
 
 
 
 