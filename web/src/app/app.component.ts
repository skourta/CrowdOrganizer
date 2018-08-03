import { Component ,OnInit} from '@angular/core';
import { DronesService } from './drones.service';
import { Drone } from './Drone';
import {MatCardModule} from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  drones: any[];
  constructor(private dronesService: DronesService) {
  }

  ngOnInit(){
    this.dronesService.getDrones().subscribe(drones => {
      this.drones = drones;
    });
  }
}
