import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  model:string;
  speed: number;
  name:string;
  colors: Colors;
  options:string[];
  isEdit: boolean = false;
  

  constructor() { }

  ngOnInit(): void {
    this.speed = 325;
    this.model = "RS8";
    this.name = "Audi";
    this.colors ={
      car: "white",
      salon: "black",
      wheels: "silver"
    };
    this.options = ["ABS", "Автопилот", "Авто паркинг"];
  }

  showEdit() {
    this.isEdit = !this.isEdit;
  }

  addOpt(option) {
    this.options.unshift(option);
    return false;
  }

  deleteOpt(option) {
    for(let i = 0; i< this.options.length; i++) {
      if (this.options[i] == option)
        this.options.splice(i ,1);
        break;
    }
  }

  carSelect(carName) {
    if (carName == 'bmw') {
      this.speed = 280;
      this.model = "M5";
      this.name = "BMW";
      this.colors ={
        car: "Синий",
        salon: "Белый",
        wheels: "Серебристый"
      };
      this.options = ["ABS", "Автопилот", "Авто паркинг"];
    } else if(carName == 'audi') {
      this.speed = 325;
      this.model = "RS8";
      this.name = "Audi";
      this.colors ={
      car: "white",
      salon: "black",
      wheels: "silver"
      };
      this.options = ["ABS", "Автопилот", "Авто паркинг"];
    } else {
      this.speed = 180;
      this.model = "C180";
      this.name = "Mercedes";
      this.colors ={
      car: "white",
      salon: "black",
      wheels: "silver"
      };
      this.options = ["ABS", "Автопилот", "Авто паркинг"];
    }


  }


}

interface Colors {
  car:string,
  salon:string,
  wheels:string;
}
