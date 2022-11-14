import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  Router,
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
} from '@angular/router';
import { Observable, of } from 'rxjs';

import { UROS_DATA, VELJKO_DATA } from '../services/dummy-data';



@Injectable({
  providedIn: 'root',
})
export class DeveloperDataResolver implements Resolve<string[]> {
  constructor(private http: HttpClient) {}
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<string[]> {
    const developer: 'Uros' | 'Veljko' = route.params['developer'];
    if (developer === 'Uros') {
      return of(UROS_DATA);
    } else if (developer === 'Veljko') {
      return of(VELJKO_DATA);
    } else {
      return of(VELJKO_DATA);
    }
  }
}
