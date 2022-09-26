import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";

//containers
import { ScheduleComponents } from "./containers/schedule/schedule.component";

export const ROUTES: Routes =[
  { path: '', component: ScheduleComponents }
];

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(ROUTES)
  ],
  declarations: [
    ScheduleComponents
  ]
})

export class ScheduleModule {}
