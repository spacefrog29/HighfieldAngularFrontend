import { Component } from '@angular/core';
import { colourEntity } from '../Models/colour.model';
import { ColourEntityService } from '../Services/colourlist.service';

type ColourMappings = {
  [key: string]: string;
};

@Component({
  selector: 'app-colours',
  templateUrl: './colours.component.html',
  styleUrls: ['./colours.component.css']
})
export class ColoursComponent {
  constructor(private colourentityservice: ColourEntityService) {}

  colourData: colourEntity[] = [];

  colourMappings: ColourMappings = {
    blue: '.blue',
    yellow: '.yellow',
    white: '.white',
    grey: '.grey',
    orange: '.orange',
      puce: '.puce',
      crimson: '.crimson',
      pink: '.pink',
      green: '.green',
      indigo: '.indigo',
      purple: '.purple',
      aquamarine: '.aquamarine',
      fuscia: '.fuscia',
      goldenrod: '.goldenrod',
      khaki: '.khaki',
      maroon: '.maroon',
      mauv: '.mauv',
      red: '.red',
      turquoise: '.turquoise',
      violet: '.violet'
    };
    
    getColourClass(colourName: string): string {
      const cssVariable = this.colourMappings[colourName.toLowerCase()] || '.default';
      return `dynamic-color${cssVariable}`;
    }
    
  ngOnInit(): void {
    this.colourentityservice.getColourData().subscribe({
      next: (response) => {
        if (Array.isArray(response)) {
          this.colourData = response as colourEntity[];
        } else {
          this.colourData = [response as colourEntity];
        }
      },
      error: (error) => {
        console.error('error fetching colour data:', error);
      }
    });
  }

  
}
