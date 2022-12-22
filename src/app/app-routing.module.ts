import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ContactusComponent } from './contactus/contactus.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import{PgnotfoundComponent} from './pgnotfound/pgnotfound.component';
import { SearchallComponent } from './searchall/searchall.component';
import{StarterComponent} from './starter/starter.component';
import { SoupComponent } from './soup/soup.component';
import { PizzaComponent } from './pizza/pizza.component';
import { SaladComponent } from './salad/salad.component';
import { GrillComponent } from './grill/grill.component';
import { SeafoodComponent } from './seafood/seafood.component';
import { FishComponent } from './fish/fish.component';
import { PrawnsComponent } from './prawns/prawns.component';
import { CrabComponent } from './crab/crab.component';
import { DessertComponent } from './dessert/dessert.component';
import { IcecreamsComponent } from './icecreams/icecreams.component';
import { DrinksComponent } from './drinks/drinks.component';
import { MaincourseComponent } from './maincourse/maincourse.component';
import { VegcurryComponent } from './vegcurry/vegcurry.component';
import { NonvegcurryComponent } from './nonvegcurry/nonvegcurry.component';
import { RotiComponent } from './roti/roti.component';
import { BiryaniComponent } from './biryani/biryani.component';
import { CakeComponent } from './cake/cake.component';
import { AddtocartComponent } from './addtocart/addtocart.component';

const routes: Routes = [
  {path:'home',component:HomeComponent},
{path:'signup',component:SignupComponent},
{path:'login',component:LoginComponent},
{path:'contactus',component:ContactusComponent},
{path:'searchall',component:SearchallComponent},
{path:'addtocart',component:AddtocartComponent},
{path:'starter',component:StarterComponent,children:[{path:'soup',component:SoupComponent},
{path:'pizza',component:PizzaComponent},
{path:'salad',component:SaladComponent},
{path:'grill',component:GrillComponent},
{path:'',redirectTo:'/starter/soup',pathMatch:'full'}
]
},
{path:'seafood',component:SeafoodComponent,children:[{path:'fish',component:FishComponent},
{path:'prawns',component:PrawnsComponent},
{path:'crab',component:CrabComponent},
{path:'',redirectTo:'/seafood/fish',pathMatch:'full'}
]
},
{path:'dessert',component:DessertComponent,children:[{path:'cake',component:CakeComponent},
{path:'icecreams',component:IcecreamsComponent},
{path:'drinks',component:DrinksComponent},
{path:'',redirectTo:'/dessert/cake',pathMatch:'full'}
]
},
{path:'maincourse',component:MaincourseComponent,children:[{path:'vegcurry',component:VegcurryComponent},
{path:'nonvegcurry',component:NonvegcurryComponent},
{path:'roti',component:RotiComponent},
{path:'biryani',component:BiryaniComponent},
{path:'',redirectTo:'/maincourse/vegcurry',pathMatch:'full'}
]
},
{path:'',redirectTo:'/home',pathMatch:'full'},
{path: '404', component: PgnotfoundComponent},
{path: '**', redirectTo: '/404'}

];

@NgModule({
  imports:  [  RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
