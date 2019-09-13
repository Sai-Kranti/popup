import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RiseComponent } from './rise/rise.component';


const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  entryComponents: [RiseComponent]
})
export class AppRoutingModule { }
