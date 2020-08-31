import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClassBindingComponent } from './modules/class-binding/class-binding.component';
import { StyleBindingComponent } from './modules/style-binding/style-binding.component';
import { MainContainerComponent } from './modules/main-container/main-container.component';
import { StyleConcetComponent } from './modules/style-concet/style-concet.component';
import { RouingComponent } from './modules/rouing/rouing.component';
import { ChildParentComponent } from './modules/child-parent/child-parent.component';
import { LifecycleComponent } from './modules/lifecycle/lifecycle.component';


const routes: Routes = [
  {
    path: "",
    component: MainContainerComponent
  },
  {
    path: "class-binding",
    component: ClassBindingComponent
  },
  {
    path: "style-binding",
    component: StyleBindingComponent
  },
  {
    path: "style-concent",
    component: StyleConcetComponent
  },
  {
    path: "routing/:courseId/:propertyId",
    component: RouingComponent
  },
  {
    path: "child-function-call-from-parent",
    component: ChildParentComponent
  },
  {
    path: "life-cycle",
    component: LifecycleComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
