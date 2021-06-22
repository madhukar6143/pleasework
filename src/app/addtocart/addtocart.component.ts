import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Data2Service } from '../data2.service';

@Component({
  selector: 'app-addtocart',
  templateUrl: './addtocart.component.html',
  styleUrls: ['./addtocart.component.css']
})
export class AddtocartComponent implements OnInit {
  totalsum:number
  product:any
  check:boolean=false
  counter= new Array(100).fill(1);
  users:any[]=[]
  display:boolean=true
    constructor( private obj:Data2Service, private router:Router ) { }
  
   
    callcounterplus(ind){
      this.counter[ind]=this.counter[ind]+1
    }
  
    callcounterminus(ind){
      if(this.counter[ind]!=1)
   this.counter[ind]=this.counter[ind]-1
    }
  
    ngOnInit(): void {
      this.getlist();  
    }
  
  
    delete(id)
    {  
      this.obj.deleteDataUsingId(id).subscribe(
      data=>{
        console.log(data)
        this.getlist();
        if(this.users.length==1)
        {
          console.log("yeah im loaded")
        window.location.reload()
      }
       
      },
      err=>
      {
        console.log("error in reading",err)
      }
  
      )
  }
  
  
  placeOrder()
  {
  this.display=!this.display
    this.obj
    let sum=0;
    let i=0;
    for(let p of this.users)
   { 
      sum=sum+this.counter[i]*p.price
      console.log(sum)
      i=i+1
  }
  this.totalsum=sum;
  }
  
  
  getlist()
  {
    this.obj.getFromAddToCart().subscribe(
      res=>
      {
        this.users=res;
        if(this.users.length>0)
        {
        this.check=true
      }
      },
      err=>
      {
        console.log("yeah error in refresh",err)
      }
    )
  }
  
  }