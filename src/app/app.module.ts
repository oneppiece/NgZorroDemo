import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {NgZorroAntdModule} from 'ng-zorro-antd';

import {AppComponent} from './app.component';
import { NzDemoGridGutterComponent } from './nz-demo-grid-gutter/nz-demo-grid-gutter.component';
import { NzDemoGridFlexComponent } from './nz-demo-grid-flex/nz-demo-grid-flex.component';
import { NzDemoLayoutComponent } from './nz-demo-layout/nz-demo-layout.component';


@NgModule({
  declarations: [
    AppComponent,
    NzDemoGridGutterComponent,
    NzDemoGridFlexComponent,
    NzDemoLayoutComponent
  ],
  imports: [
    BrowserModule,
    NgZorroAntdModule.forRoot({extraFontName: 'anticon', extraFontUrl: './assets/iconfont'})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
