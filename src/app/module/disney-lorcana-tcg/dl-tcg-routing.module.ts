import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DisneyLorcanaTCGSetComponent } from './component/disney-lorcana-tcgset/disney-lorcana-tcgset.component';
import { DisneyLorcanaTCGCardComponent } from './component/disney-lorcana-tcgcard/disney-lorcana-tcgcard.component';
import { DlTcgHomeComponent } from './page/dl-tcg-home/dl-tcg-home.component';

const routes: Routes = [
  {
    path: '',
    component: DlTcgHomeComponent,
  },
  {
    path: 'set/:id',
    component: DisneyLorcanaTCGSetComponent,
  },
  {
    path: 'card/:id',
    component: DisneyLorcanaTCGCardComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DLTCGRoutingModule { }
