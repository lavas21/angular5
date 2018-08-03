import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DonarComponent } from './donar/donar.component';
import { DetailsComponent } from './details/details.component';
import { UniGuardService } from './uni-guard.service';
import { PastComponent } from './past/past.component';

const routes: Routes = [
  {path:'',redirectTo:'login',pathMatch:'full'},
  {path:'login', component: LoginComponent},
  {path:'donar', component: DonarComponent,canActivate:[UniGuardService]},
  {path:'donar/:id', component: DonarComponent,canActivate:[UniGuardService]},
  {path:'details', component: DetailsComponent, canDeactivate:[UniGuardService]},
  {path:'past', component: PastComponent,canActivate:[UniGuardService]},
  {path:'past/:name', component: PastComponent,canActivate:[UniGuardService]},
  {path:'**',redirectTo:'login'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
