import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Deviceservice {
  private http = inject(HttpClient);
  // objList: any[] = [];

  getDevices() : Observable<{id:string, name: string}[]> {
    return this.http.get<{data:{id: string, name: string}[]}>('https://dogapi.dog/api/v2/breeds').pipe(map(obj => obj.data));
  }

  postDevices(payload: object) : Observable<unknown> {
    return this.http.post<unknown>('https://dogapi.dog/api/v2/breeds', payload);
  }
}
