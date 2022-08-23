import { ExportExceljsComponent } from './export-exceljs/export-exceljs.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'export-exceljs', component: ExportExceljsComponent },
  { path: '', redirectTo: 'export-exceljs', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
