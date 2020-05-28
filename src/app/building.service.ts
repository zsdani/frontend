import { Injectable } from '@angular/core';
import { Building } from "./building";

@Injectable({
  providedIn: 'root'
})
export class BuildingService {
  buildings: Building[] = [
    {
      id: 1,
      b_name: 'Északi',
      floors: 1,
    },
    {
      id: 2,
      b_name: 'Északi',
      floors: 2,
    },
    {
      id: 3,
      b_name: 'Északi',
      floors: 3,
    },
    {
      id: 4,
      b_name: 'Déli',
      floors: 1,
    },
  ];

  constructor() { }


  getBuildings() {
    return this.buildings;
  }
  
  getBuild(id) {
    return this.buildings.find(i => i.id == id);
  }
}
