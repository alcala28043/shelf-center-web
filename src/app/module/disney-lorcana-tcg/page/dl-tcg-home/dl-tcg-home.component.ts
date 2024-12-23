import { Component } from '@angular/core';
import { Catalog } from '../../../../model/catalog.interface';
import { CATALOGS } from '../../../../page/catalogs/catalogs.constants';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { RouterLink } from '@angular/router';
import { DLTCGSet } from '../../model/dl-tcg-set.interface';
import { DLTCGService } from '../../service/dl-tcg.service';

@Component({
  selector: 'app-dl-tcg-home',
  imports: [MatCardModule, MatButtonModule, RouterLink],
  templateUrl: './dl-tcg-home.component.html',
  styleUrl: './dl-tcg-home.component.scss'
})
export class DlTcgHomeComponent {

  catalog: Catalog = CATALOGS.find(catalog => catalog.id === 'dl-tcg')!;
  sets:DLTCGSet[]=[];  
  constructor(private service: DLTCGService) { }
  
  ngOnInit(): void {
    this.service.getSets().subscribe(
      (response) => {
        console.log("GET SETS RESPONSE",response);
        this.sets = response.sort((a:any, b:any) => b.Set_Num - a.Set_Num);
      },
      (error) => console.error('Error fetching data', error)
    );
  }
}
