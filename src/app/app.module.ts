import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClassBindingComponent } from './modules/class-binding/class-binding.component';
import { StyleBindingComponent } from './modules/style-binding/style-binding.component';
import { RouingComponent } from './modules/rouing/rouing.component';
import { LifecycleComponent } from './modules/lifecycle/lifecycle.component';
import { StyleConcetComponent } from './modules/style-concet/style-concet.component';
import { MainContainerComponent } from './modules/main-container/main-container.component';
import { DemoOneComponent } from './component/demo-one/demo-one.component';
import { ChildParentComponent } from './modules/child-parent/child-parent.component';
import { DemoTwoComponent } from './component/demo-two/demo-two.component';
import { DemoThreeComponent } from './component/demo-three/demo-three.component';

@NgModule({
  declarations: [
    AppComponent,
    ClassBindingComponent,
    StyleBindingComponent,
    RouingComponent,
    LifecycleComponent,
    StyleConcetComponent,
    MainContainerComponent,
    DemoOneComponent,
    ChildParentComponent,
    DemoTwoComponent,
    DemoThreeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
