import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
   sal:number=0.01;
   rta:number=0;


   prnombre:string="";
   prapellido:string="";
   departamentos:string="";

   
   afp:number=0;
   isssipsfabin:number=0;

   saldes:number=0;

  operacion(){

   
  if (this.sal >=472 && this.sal<895.24) {
   
    this.isssipsfabin=24;
    this.afp=50;
    this.saldes=this.sal-this.afp-this.isssipsfabin;
    this.rta=((this.saldes-472)*(0.10)+17.67)
    
      } 
      else if(this.sal>=895.24 && this.sal<2038.10){

        this.isssipsfabin=24;
        this.afp=50;
        this.saldes=this.sal-this.afp-this.isssipsfabin;
        this.rta=(this.saldes-895.24)*(0.20)+60
        }

         else if(this.sal>=2038.10){
          
          this.isssipsfabin=24;
          this.afp=50;
          this.saldes=this.sal-this.afp-this.isssipsfabin;
          this.rta=(this.saldes-2038.10)*(0.30)+288.57

          }
    
  }
}
