import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatTable, MatTableDataSource, MatTableModule} from '@angular/material/table';
import { DLTCGService } from '../../service/dl-tcg.service';
import { DLTCGSet } from '../../model/dl-tcg-set.interface';

import {MatSort, Sort, MatSortModule} from '@angular/material/sort';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';
import { DLTCGSetsTableComponent } from '../dl-tcg-sets-table/dl-tcg-sets-table.component';
@Component({
  selector: 'app-disney-lorcana-tcg',
  imports: [DLTCGSetsTableComponent],
  templateUrl: './disney-lorcana-tcg.component.html',
  styleUrl: './disney-lorcana-tcg.component.scss'
})
export class DisneyLorcanaTCGComponent {

}
