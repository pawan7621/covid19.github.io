import { Component, OnInit } from '@angular/core';
import { DesignUtilityService } from '../service/design-utility.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private _du: DesignUtilityService) {}

  countries: any;
  country: any;
  Confirmed: Number;
  Recovered: Number;
  Deaths: Number;
  Date: Date;
  Active: Number;
  Country: string;
  TotalConfirmed: Number;
  TotalDeaths: Number;
  TotalRecovered: Number;

  ngOnInit(): void {
    this._du.getCountry().subscribe((data) => {
      // console.log(data);
      this.countries = data;
    })
      this.getWorldData()
  }

  getCoronaData() {
    this._du.getCoronaRealData(this.country).subscribe((data) => {
      // console.log(data)
      var index = data.length - 1
      this.Confirmed = data[index].Confirmed
      this.Recovered = data[index].Recovered
      this.Deaths = data[index].Deaths
      this.Date = data[index].Date
      this.Active = data[index].Active
      this.Country = data[index].Country
    })
  }

  getCovidCountry(country: any) {
    this.Country = country
  }

  getWorldData() {
    this._du.getTotal().subscribe((data) => {
      // console.log(data);
      this.TotalConfirmed = data.TotalConfirmed;
      this.TotalDeaths = data.TotalDeaths;
      this.TotalRecovered = data.TotalRecovered;
    })
  }
}