import { Component, OnInit } from '@angular/core';
import { DesignUtilityService } from '../service/design-utility.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  constructor(private _du:DesignUtilityService) { }
  getData ={}
  ngOnInit(): void {
    
    this._du.covidapi().subscribe((res) => {
      console.log(res);
      this.getData = res;
    })
  }

}
