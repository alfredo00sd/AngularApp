import { Component, OnInit } from '@angular/core';
import { ArbolesService } from 'src/app/shared/arboles.service';

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
  arboles : any[];

  constructor(public service : ArbolesService) { 
    this.lat = 18.4801923;
    this.lng = -70.0169209;
    this.zoom = 8;
    this.mapTypeId = 'hybrid';
  }

  getCurrentPosition() {
    navigator.geolocation.getCurrentPosition(position => {
      this.lat = position.coords.latitude;
      this.lng = position.coords.longitude;
      this.zoom = 15;
    });
  }

  ngOnInit(): void {
    this.service.getAll().then(arboles => this.arboles = arboles).catch(err => console.log(err));
  }
}
