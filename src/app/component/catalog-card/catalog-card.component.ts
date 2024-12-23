import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { Catalog } from '../../model/catalog.interface';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-catalog-card',
  imports: [MatCardModule, MatButtonModule, RouterLink],
  templateUrl: './catalog-card.component.html',
  styleUrl: './catalog-card.component.scss'
})
export class CatalogCardComponent {
  @Input()
  catalog!: Catalog;
}
