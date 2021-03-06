import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgModule} from '@angular/core';
import {NgZorroAntdModule} from 'ng-zorro-antd';

import {AppComponent} from './app.component';
import {NzDemoGridGutterComponent} from './nz-demo-grid-gutter/nz-demo-grid-gutter.component';
import {NzDemoGridFlexComponent} from './nz-demo-grid-flex/nz-demo-grid-flex.component';
import {NzDemoLayoutComponent} from './nz-demo-layout/nz-demo-layout.component';
// import { NzDemoAffixComponent } from './nz-demo-affix/nz-demo-affix.component';
import {NzDemoBreadcrumbComponent} from './nz-demo-breadcrumb/nz-demo-breadcrumb.component';
import {NzDemoAffixComponent} from './nz-demo-affix/nz-demo-affix.component';
import {NzDemoDropdownComponent} from './nz-demo-dropdown/nz-demo-dropdown.component';

@NgModule({
  declarations: [
    AppComponent,
    NzDemoGridGutterComponent,
    NzDemoGridFlexComponent,
    NzDemoLayoutComponent,
    NzDemoAffixComponent,
    NzDemoBreadcrumbComponent,
    NzDemoDropdownComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NgZorroAntdModule.forRoot({extraFontName: 'anticon', extraFontUrl: './assets/iconfont'})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
