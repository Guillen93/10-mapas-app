import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

import mapboxgl from 'mapbox-gl';
mapboxgl.accessToken = 'pk.eyJ1IjoiZGFuaTkzIiwiYSI6ImNscG1mdTU0cTBhbmYydnA2ODc1enF4NDEifQ.exjtg7yLcKszENjZl9D8FQ';

if ( !navigator.geolocation ) {
  // si la persona tiene un navegador que no soporta la geolocalización
  alert('Navegador no soporta la Geolocation');
  throw new Error('Navegador no soporta la Geolocation') //solo aparece en consola;
}


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
