import { ActivatedRouteSnapshot, ResolveFn, RouterStateSnapshot } from '@angular/router';
import { Devices } from '../devices/devices';
import { Deviceservice } from '../service/deviceservice';
import { inject } from '@angular/core';

export const deviceResolver: ResolveFn<{id: string, name: string}[]> = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
  const deviceService = inject(Deviceservice);
  return deviceService.getDevices();
};
