import { Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'favourite',
  templateUrl: './favourite.component.html',
  // inputs : ['isFavourite']
  // styles : [
  //     `.glyphicon {
  //       color: green;
  //   }
  //   .glyphicon-star {
  //     background: black;
  //   }
  //   `
  // ],
  styleUrls: ['./favourite.component.css'],
  encapsulation: ViewEncapsulation.None
  // Angular emulates shadow dom
})
export class FavouriteComponent {
  // Input() is another decorators in angular for marking fields and properties as input properties
  @Input('isFavourite') isSelected: boolean;
  // @Input('is-favourite') isFavourite: boolean;
  @Output('change') click = new EventEmitter();

  onClick(){
    this.isSelected = !this.isSelected;
    // this.change.emit(this.isSelected);
    this.click.emit({ newValue: this.isSelected }); 
  }
}

export interface FavouriteChangedEventArgs{
  newValue: boolean
}

