import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GIFIntroComponent } from './components/gif-intro/gif-intro.component';
import { MainComponent } from './components/main/main.component';

const routes: Routes = [
  { path: 'intro', component: GIFIntroComponent, data: { animation: 'intro' } },
  { path: 'home', component: MainComponent, data: { animation: 'main' } },
];

@NgModule({
  declarations: [AppComponent, GIFIntroComponent, MainComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
