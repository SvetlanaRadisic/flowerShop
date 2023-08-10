import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { CategoryComponent } from './components/category/category.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { ProductOrderComponent } from './components/product-order/product-order.component';
import { ProductComponent } from './components/product/product.component';
import { ShopComponent } from './components/shop/shop.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { SignupComponent } from './components/signup/signup.component';
import { AuthGuard } from './services/auth.guard';
const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'shop', component: ShopComponent, children: [
  {path: ':category', component: CategoryComponent}]},
  {path: 'shop/:category/:id/:name', component:ProductComponent},
  {path: 'cart', component:ShoppingCartComponent, canActivate: [AuthGuard]},
  {path: 'login', component:LoginComponent},
  {path: 'signup', component:SignupComponent},
  {path: 'productOrder', component:ProductOrderComponent},
  {path: 'about', component:AboutComponent}

]
    

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


