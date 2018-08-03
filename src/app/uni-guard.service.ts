import { Injectable } from '@angular/core';
import {Route, RouterState, RouterStateSnapshot, CanActivate, CanDeactivate, ActivatedRouteSnapshot} from "@angular/router"
import { DetailsComponent } from './details/details.component';

@Injectable({
  providedIn: 'root'
})
export class UniGuardService implements CanActivate, CanDeactivate<{}> {

  constructor() { }
  canActivate(route:ActivatedRouteSnapshot , state: RouterStateSnapshot): boolean{
    console.log(route);
    console.log(state.url);
    if(sessionStorage.getItem('isLogin') == "Y")
    return true;
    else{
      return false;
    }
    /*if(state.url == "/donar"){
      console.log("You r in donar page");
      return true;
    }else{
      return false;
    }*/
    //return true;
  }

  canDeactivate(comp: DetailsComponent, currentRoute: ActivatedRouteSnapshot, 
    currentState: RouterStateSnapshot/*, nextState: RouterStateSnapshot*/): boolean{
      return window.confirm("Are you sure?");
  }
  
}
