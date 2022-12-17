import { Component } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {
  title: string="two way binding";
  fullname : string="";
  _show: boolean=true;
  _number1: number=0;
  _number2: number=0;
  _number3: number=0;
  total: number=0;


  btnclick(){
    this.UserList.push(this.fullname);
  }
  btnclear(){
   this.fullname="";
   this.UserList=[];
  }
  btnSwitch(){
    if(this._show == true){
      this._show = false;
    }else{
      this._show = true;
    }

  }
  UserList:string[]=[];
  btnCal(){
    this.total = this._number1*this._number2*this._number3;


  }
}

