import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Deviceservice } from '../service/deviceservice';

@Component({
  selector: 'app-device',
  imports: [],
  templateUrl: './device.html',
  styleUrl: './device.scss'
})
export class Device {
  readonly deviceId: string;
  public name?: string;
  private route = inject(ActivatedRoute);
  private http = inject(Deviceservice);

  constructor() {
    this.deviceId = this.route.snapshot.paramMap.get('id') ?? 'default-id';
    this.name = this.route.snapshot.queryParamMap.get('name') ?? 'default-name';
    
    
    const snapshot = this.route.snapshot;
    console.log({
      url: snapshot.url,
      params: snapshot.params,
      queryParams: snapshot.queryParams,
      deviceId: this.deviceId
    });
  }
}