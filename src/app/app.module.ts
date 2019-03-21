import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LifeCycleComponent } from './demos/life-cycle/life-cycle.component';
import { LcPersonComponent } from './demos/life-cycle/lc-person/lc-person.component';
import { ChangeDetectionComponent } from './demos/change-detection/change-detection.component';
import { CdPersonComponent } from './demos/change-detection/cd-person/cd-person.component';
import { PersonDetailComponent } from './demos/change-detection/cd-person/person-detail/person-detail.component';
import { ViewEncapsulationComponent } from './demos/view-encapsulation/view-encapsulation.component';
import { VeNativeComponent } from './demos/view-encapsulation/ve-native/ve-native.component';
import { VeEmulatedComponent } from './demos/view-encapsulation/ve-emulated/ve-emulated.component';
import { VeNoneComponent } from './demos/view-encapsulation/ve-none/ve-none.component';
import { FormComponent } from './demos/form/form.component';
import { TemplateDrivenComponent } from './demos/form/template-driven/template-driven.component';
import { ReactiveComponent } from './demos/form/reactive/reactive.component';
import { ReactiveFbComponent } from './demos/form/reactive-fb/reactive-fb.component';
// import { ExampleComponent } from './example/example.component';
import { DirectiveComponent } from './demos/directive/directive.component';
// import { NgDerictiveComponent } from './demos/directive/ng-derictive/ng-derictive.component';
import { NgDirectiveComponent } from './demos/directive/ng-directive/ng-directive.component';
import { ListitemComponent } from './demos/directive/ng-directive/listitem/listitem.component';
import { CustomDirectiveComponent } from './demos/directive/custom-directive/custom-directive.component';
import { MyhiddenDirective } from './demos/directive/custom-directive/myhidden.directive';
import { MyifDirective } from './demos/directive/custom-directive/myif.directive';
import { ComponentCommunicationComponent } from './demos/component-communication/component-communication.component';
import { CcChildComponent } from './demos/component-communication/cc-child/cc-child.component';
import { CcParentComponent } from './demos/component-communication/cc-parent/cc-parent.component';
import { CcAnotherChildComponent } from './demos/component-communication/cc-another-child/cc-another-child.component';
import { PipeComponent } from './demos/pipe/pipe.component';
import { CurrencyExchangePipe } from './demos/pipe/currency-exchange.pipe';
import { MyfilterPipe } from './demos/pipe/myfilter.pipe';


@NgModule({
  declarations: [
    AppComponent,
    LifeCycleComponent,
    LcPersonComponent,
    ChangeDetectionComponent,
    CdPersonComponent,
    PersonDetailComponent,
    ViewEncapsulationComponent,
    VeNativeComponent,
    VeEmulatedComponent,
    VeNoneComponent,
    FormComponent,
    TemplateDrivenComponent,
    ReactiveComponent,
    ReactiveFbComponent,
    DirectiveComponent,
    NgDirectiveComponent,
    ListitemComponent,
    MyhiddenDirective,
    CustomDirectiveComponent,
    MyifDirective,
    ComponentCommunicationComponent,
    CcChildComponent,
    CcParentComponent,
    CcAnotherChildComponent,
    PipeComponent,
    CurrencyExchangePipe,
    MyfilterPipe,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
