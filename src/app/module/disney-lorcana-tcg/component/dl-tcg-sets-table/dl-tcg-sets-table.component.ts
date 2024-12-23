import { Component, ViewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTable, MatTableDataSource, MatTableModule } from '@angular/material/table';
import { RouterLink } from '@angular/router';
import { DLTCGSet } from '../../model/dl-tcg-set.interface';
import { DLTCGService } from '../../service/dl-tcg.service';
import { DLTCG_SETS_TABLE } from './dl-tcg-sets-table.constants';

@Component({
  selector: 'app-dl-tcg-sets-table',
  imports: [MatTableModule, MatPaginatorModule, MatSortModule, MatButtonModule, MatIconModule, RouterLink],
  templateUrl: './dl-tcg-sets-table.component.html',
  styleUrl: './dl-tcg-sets-table.component.scss'
})
export class DLTCGSetsTableComponent {

  sets:DLTCGSet[]=[];  
  dataSource = new MatTableDataSource<DLTCGSet>();
  displayedColumns: string[] = DLTCG_SETS_TABLE.COLUMNS
                                              .sort((a, b) => a.order - b.order)
                                              .map(column => column.key);
  
  @ViewChild(MatTable) table!: MatTable<DLTCGSet>;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private service: DLTCGService) { }

  ngOnInit(): void {
    this.service.getSets().subscribe(
      (response) => {
        console.log("GET SETS RESPONSE",response);
        console.log("DISPLAYED COLUMNS",this.displayedColumns);
        this.sets = response;
        this.dataSource.data = response;
        this.table.renderRows();
      },
      (error) => console.error('Error fetching data', error)
    );
  }
  
  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }
}
