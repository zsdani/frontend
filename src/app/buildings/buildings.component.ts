import { Component, OnInit } from '@angular/core';
import { Building } from "../building";
import { BuildingService } from "../building.service"

@Component({
  selector: 'app-buildings',
  templateUrl: './buildings.component.html',
  styleUrls: ['./buildings.component.css']
})
export class BuildingsComponent implements OnInit {

  public buildings: Building[] = [];

  constructor(
    private buildingService: BuildingService
  ) { 
    //buildingService.getBuildings().then((data) => this.buildings = data);
  }

  ngOnInit(): void {
  }

}
