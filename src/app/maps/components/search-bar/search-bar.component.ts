import { Component } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.css'
})
export class SearchBarComponent {

   private debounceTimer?: NodeJS.Timeout;            

   onQueryChanged( query: string = '' ) {
     if ( this.debounceTimer ) clearTimeout( this.debounceTimer );  // Si tiene un valor se limpia
     this.debounceTimer = setTimeout(() => {
       console.log('Mandar este query:', query);
     }, 350 ); 
   }
 
}
