import { Injectable } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabase , AngularFireList} from 'angularfire2/database';
import * as firebase from 'firebase';
import { Drone } from './Drone';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DronesService {
  drones: Observable<any[]> = null;
  drone: Observable<any>;

  constructor(private db: AngularFireDatabase) {
  }

  getDrones() {
    this.drones = this.drones = this.db.list<any>('/drones').valueChanges();

    return this.drones;
  }

  // getDrone(id){
  //   this.drone = db.object('/drones/'+id) as FirebaseObjectObservable<Drone>
  //   return this.drone;
  // }
}
