import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'; 
import { Deviceservice } from '../service/deviceservice';
import { Observable } from 'rxjs';
import { AsyncPipe, CommonModule } from '@angular/common';

export interface DeviceModel {
  deviceId: string;
  name: string;
}
@Component({
  selector: 'app-devices',
  imports: [AsyncPipe, CommonModule],
  templateUrl: './devices.html',
  styleUrls: ['./devices.scss'] 
})
export class Devices {
  private router = inject(Router);
  private route = inject(ActivatedRoute)
  private deviceService = inject(Deviceservice);
  private devices: unknown | undefined;

  devicesList$: Observable<{id: string; name: string;}[]> = this.deviceService.getDevices(); 

  constructor() {
    // this.deviceService.getDevices()
    // this.deviceService.postDevices({id: '20', name :'New Device'})
    this.devices = this.route.snapshot.data['device']
    console.log('device details', this.devices)
  }

  // devicesList: DeviceModel[] = this.deviceService.objList;

  // devicesList: DeviceModel[] = this.deviceService.objList [
  //   { deviceId: '1', name: 'iPhone 15' },
  //   { deviceId: '2', name: 'Samsung Galaxy' },
  //   { deviceId: '3', name: 'Google Pixel' }
  // ];

  
  navigateToDevice(deviceId: string, name: string){
    this.router.navigate([`/device/${deviceId}`], { queryParams: { name } });
  }
}
