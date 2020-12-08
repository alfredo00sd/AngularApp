import { Component, OnInit } from '@angular/core';
import { ArbolesService } from 'src/app/shared/arboles.service';
import { AppUserService } from 'src/app/shared/app-user.service'

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
  users : any[];

  constructor(public service : ArbolesService, public userService : AppUserService) { 
    this.lat = 18.4801923;
    this.lng = -70.0169209;
    this.zoom = 8;
    this.mapTypeId = 'hybrid';
  }

  ngOnInit(): void {
    this.service.getAll().then(arboles => this.arboles = arboles).catch(err => console.log(err));
    this.userService.getAll().then(users => this.users = users).catch(err => console.log(err));
  }
}
