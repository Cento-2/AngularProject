import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Login } from './login/login';
import { Devices } from './devices/devices';
import { Device } from './device/device';
import { deviceResolver } from './resolvers/device-resolver';
import { authGuard } from './guards/auth-guard';
import { DeviceInfo } from './device-info/device-info';
import { Registration } from './registration/registration';

export const routes: Routes = [
    {
        path: '',
        component: Home,
    },
    {
        path: 'login',
        component: Login,
    },
    {
        path: 'registration',
        component: Registration
    },
    {
        path:'devices',
        component: Devices,
        canActivate : [authGuard],
        children : [{
            path: 'id',
            component : Device
        }]
    },
    {
        path:'device/:id',
        component: Device,
        resolve : {
            device : deviceResolver
        }
    }
];

