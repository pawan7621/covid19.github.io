import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DesignUtilityService {

  constructor(private http:HttpClient) { 

  }
 covidUrl='https://coronavirus-19-api.herokuapp.com/countries';

 covidapi():Observable<any>{
  return this.http.get(this.covidUrl)
  }

  getCountry():Observable<any>{
    const url = 'https://api.covid19api.com/countries'
   return this.http.get<any>(url);

  }
  getCoronaRealData(country):Observable<any>{
    const url= "https://api.covid19api.com/total/dayone/country/" + country
  return this.http.get<any>(url);
  }
  getTotal():Observable<any>{
    const url = 'https://api.covid19api.com/world/total' 
   return this.http.get<any>(url)
  }
}
