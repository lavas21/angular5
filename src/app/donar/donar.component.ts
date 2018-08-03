import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-donar',
  templateUrl: './donar.component.html',
  styleUrls: ['./donar.component.css']
})
export class DonarComponent implements OnInit {
  sub :any;
  id:number;
  data:string;
  constructor(private route: ActivatedRoute,private router:Router) { }
  ngOnInit() {
      this.sub = this.route.params.subscribe(params => {
      this.id = params['id'];
      if(this.id != undefined)
      this.data = "You have selected donar "+this.id;   
      else{
        //this.router.navigateByUrl('/past');
        
      }  
    });
  }

  goTo() { 
    console.log("into");
    //this.router.navigateByUrl('/past');//without params
    this.router.navigate(['/past',"navigated from donar"]); //with params
   
  }
}
