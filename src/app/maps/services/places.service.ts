import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {


  public useLocation?: [number, number]; // ? es opcional

  get isUserLocationReady(): boolean 
  {
    return !!this.useLocation;
  }

  constructor() {
    this.getUserLocation();
  }

  public async getUserLocation(): Promise<[number, number]> {
    // lo vamos a hacer en base a promesas
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(
        ({ coords }) => {
          this.useLocation = [coords.longitude, coords.latitude];
          resolve(this.useLocation);
        },
        (err) => {
          alert('No se pudo obtener la geolocalización')
          console.log(err);
          reject();
        }
      );
    });
  }

}
