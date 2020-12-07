import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-app-map',
  templateUrl: './app-map.component.html',
  styleUrls: ['./app-map.component.css']
})
export class AppMapComponent implements OnInit {

  lat : number;
  lng : number;
  zoom : number;
  mapTypeId : string;

  constructor() { 
    this.lat = 18.4801923;
    this.lng = -70.0169209;
    this.zoom = 8;
    this.mapTypeId = 'hybrid';
  }

  ngOnInit(): void {
  }

}
