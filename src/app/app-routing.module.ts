import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LifeCycleComponent } from './demos/life-cycle/life-cycle.component';
import { ChangeDetectionComponent} from './demos/change-detection/change-detection.component';
import { FormComponent } from './demos/form/form.component';
import { ViewEncapsulationComponent } from './demos/view-encapsulation/view-encapsulation.component';
const routes: Routes = [{
 path:'lc',
 component: LifeCycleComponent
},
{
 path:'cd',
 component: ChangeDetectionComponent
},
{
  path: 've',
  component:  ViewEncapsulationComponent
},
{
  path:'f',
  component: FormComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
