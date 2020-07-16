import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  userApiKey: string;
  response: any;

  tabIndex: number = 0;

  place: string;
  temp: number;
  wind: any;
  
  constructor ( private http: HttpClient) {
  }

  search (){
    this.http.get('http://api.openweathermap.org/data/2.5/forecast?id=1508291&units=metric&appid=' + this.userApiKey)
    .subscribe ((response) =>{
      this.response = response;
      console.log(this.response);
    })
  }

  ngOnInit(): void {
   
  }

  timeSelect (timeframe) {
    if (timeframe == 'now') {
      this.tabIndex = 0;
    }
    else if (timeframe == '3h'){
      this.tabIndex = 1;
    }
    else if (timeframe == '6h') {
      this.tabIndex = 2;
    }
    else if (timeframe == '9h') {
      this.tabIndex = 3;
    }
  }

}


