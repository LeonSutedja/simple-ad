import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SimpleAdShopComponent } from './simple-ad-shop/simple-ad-shop.component';

const routes: Routes = [
  { path: '', redirectTo: '/simple-ad-shop', pathMatch: 'full' },
  { path: 'simple-ad-shop', component: SimpleAdShopComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
