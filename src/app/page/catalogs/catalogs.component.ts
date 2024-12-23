import { Component } from '@angular/core';
import { CatalogCardComponent } from '../../component/catalog-card/catalog-card.component';
import { Catalog } from '../../model/catalog.interface';
import { CATALOGS } from './catalogs.constants';

@Component({
  selector: 'app-catalogs',
  imports: [ CatalogCardComponent],
  templateUrl: './catalogs.component.html',
  styleUrl: './catalogs.component.scss'
})
export class CatalogsComponent {

  catalogs: Catalog[] = CATALOGS;

}
