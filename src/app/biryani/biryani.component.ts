import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Data2Service } from '../data2.service';

@Component({
  selector: 'app-biryani',
  templateUrl: './biryani.component.html',
  styleUrls: ['./biryani.component.css']
})
export class BiryaniComponent implements OnInit {

 mydata:any[]=[
    {
      "id": 1,
      "name": "Chicken Biryani",
      "description": "Chicken and basmati rice cooked in layers, flavoured with saffron.",
      "imgPath": "https://media.istockphoto.com/photos/chicken-biryani-with-yogurt-dip-popular-indian-pakistani-non-food-picture-id1254720533?k=6&m=1254720533&s=612x612&w=0&h=Q7G6-4Q2Uc_eTkHhEGiHQmdQaIMR7AXlIsbOOzk0_GM=",
      "price": "333"
    },
    {
      "id": 2,
      "name": "Mutton Biryani",
      "description": "An aromatic mixture of rice, lamb, saffron, herbs and spices....",
      "imgPath": "https://media.istockphoto.com/photos/mutton-gosht-biryani-picture-id469866881?k=6&m=469866881&s=612x612&w=0&h=XjVN6-kyp9WLgEJaRqqLyvP5ve-kS5e6Y5Bfl-jaSXs=",
      "price": "423"
    },
    {
      "id": 3,
      "name": "Prawns Biryani",
      "description": "Prawns biryani is a flavourful made using prawns or jingga ....",
      "imgPath": "https://media.istockphoto.com/photos/king-prawn-biryani-ready-to-serve-picture-id1131411916?k=6&m=1131411916&s=612x612&w=0&h=qNRSEaOVRTWr7On1J0a1fZYb7WVxceIpis7jTTQP0ME=",
      "price": "233"
    },
    {
      "id": 4,
      "name": "Egg Biryani",
      "description": "A seasoned mixture of egg and basmati rice,served with raita...",
      "imgPath": "https://media.istockphoto.com/photos/egg-biryani-served-with-yogurt-dip-on-a-clay-pot-selective-focus-picture-id651110156?k=6&m=651110156&s=612x612&w=0&h=OsDGAv83asXD26Ag5FfDFhLk684QTLIH4Ao7yBw6z9M=",
      "price": "223"
    },
    {
      "id": 5,
      "name": "Paneer Biryani",
      "description": "A rare combination of paneer and lamb with saffron.....",
      "imgPath": "https://media.istockphoto.com/photos/vegetarian-paneer-biryani-at-light-blue-background-picture-id1163698856?k=6&m=1163698856&s=612x612&w=0&h=IAEQR4soVth1yiLTFMUfnWboTI97XzJqMs9Z7kGeKP8=",
      "price": "323"
    },
    {
      "id": 6,
      "name": "Chana Dal Biryani",
      "description": "Chana Dal iryani  is the classic vegetarian version with crsipy Dal...",
      "imgPath": "https://media.istockphoto.com/photos/chana-dal-biryani-picture-id466144379?k=6&m=466144379&s=612x612&w=0&h=Sx62cFxZH4wsDv4Y34PsjBYaaEC274VvzRD1_WUAZ0s=",
      "price": "223"
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





 






