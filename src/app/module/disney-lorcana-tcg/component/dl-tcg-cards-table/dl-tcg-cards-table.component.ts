import { Component, ViewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTable, MatTableDataSource, MatTableModule } from '@angular/material/table';
import { RouterLink } from '@angular/router';
import { DLTCGSet } from '../../model/dl-tcg-set.interface';
import { DLTCGService } from '../../service/dl-tcg.service';
import { DlTcgCard } from '../../model/dl-tcg-card.interface';
import { DLTCG_CARDS_TABLE } from './dl-tcg-cards-table.constants';
import { MatCardModule } from '@angular/material/card';
import { DLTCGColorIconComponent } from '../dl-tcg-color-icon/dl-tcg-color-icon.component';

@Component({
  selector: 'app-dl-tcg-cards-table',
  imports: [MatTableModule, MatPaginatorModule, MatSortModule, MatButtonModule, MatIconModule, RouterLink,MatCardModule,
    DLTCGColorIconComponent
  ],
  templateUrl: './dl-tcg-cards-table.component.html',
  styleUrl: './dl-tcg-cards-table.component.scss'
})
export class DLTCGCardsTableComponent {
    cards:DlTcgCard[]=[];
    displayedColumns: string[] = DLTCG_CARDS_TABLE.COLUMNS
                                  .sort((a, b) => a.order - b.order)
                                  .map(column => column.key);  
    dataSource = new MatTableDataSource<DlTcgCard>();
    
    @ViewChild(MatTable) table!: MatTable<DlTcgCard>;
    @ViewChild(MatSort) sort!: MatSort;
    @ViewChild(MatPaginator) paginator!: MatPaginator;
  
    constructor(private service: DLTCGService) { }
  
    ngAfterViewInit() {
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    }
  
    ngOnInit(): void {
      this.service.getCards().subscribe(
        (response) => {
          this.cards = response;
          this.dataSource.data = response;
          console.log(this.cards);
          console.log(this.dataSource);
          this.table.renderRows();
        },
        (error) => console.error('Error fetching data', error)
      );
    }
  }

