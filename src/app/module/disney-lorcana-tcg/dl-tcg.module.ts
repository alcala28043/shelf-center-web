import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DLTCGRoutingModule } from './dl-tcg-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { DLTCGService } from './service/dl-tcg.service';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
    DLTCGRoutingModule
  ],
  providers: [
    DLTCGService
  ]
})
export class DLTCGModule { }
