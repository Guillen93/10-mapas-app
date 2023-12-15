import { Injectable } from '@angular/core';
import { LngLatLike, Map } from 'mapbox-gl';

@Injectable({
  providedIn: 'root'
})
export class MapService {
  private map?: Map;
 // he tenido que escribir el import {Map} ...
  get isMapReady(){
    return !!this.map;
    // Si tiene algun valor es true
    // Si no tiene nada es false
  }

  setMap( map: Map ) {
    this.map = map; 
    //recibe un map y inicializamos private map
  }
   // flyTo( coords: [number,number] ) 
  flyTo( coords: LngLatLike ) {
    if ( !this.isMapReady ) throw Error('El mapa no esta inicializado');

    this.map?.flyTo({
      // .flyTo es un método del mapbox (no es el nuestro método)
      zoom: 14,
      center: coords
    });
  }
}
