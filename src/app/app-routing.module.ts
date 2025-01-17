import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { InputVisitorDetailsComponent } from './input-visitor-details/input-visitor-details.component';
import { MenuComponent } from './menu/menu.component';
import { RequestQueueNumberComponent } from './request-queue-number/request-queue-number.component';
import { VisitorListComponent } from './visitor-list/visitor-list.component';
import { TestcaseComponent } from './testcase/testcase.component';

const routes: Routes = [
  {
    path: '', component: MenuComponent, children: [
      { path: '', redirectTo: 'test-case', pathMatch: 'full' },
      {path: 'request-queue-number/:id', component: RequestQueueNumberComponent},
      {path: 'input_visitor_details', component: InputVisitorDetailsComponent},
      {path: 'visitor-list', component: VisitorListComponent},
      { path: 'test-case', component: TestcaseComponent }
    ]}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
