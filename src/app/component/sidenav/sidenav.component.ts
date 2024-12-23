import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-sidenav',
  imports: [
      MatButtonModule, 
      MatListModule,
      MatIconModule,
      RouterLink
    ],
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.scss'
})
export class SidenavComponent {

  showFiller = false;
  links = [
    {
      icon:"shelves",
      url:"/shelves",
      text:"My shelves",
      isActive:false
    },
    {
      icon:"style",
      url:"/catalogs",
      text:"Catalogs",
      isActive:false
    }
  ];
}
