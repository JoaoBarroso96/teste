import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { IslandsPage } from './islands';

@NgModule({
  declarations: [
    IslandsPage,
  ],
  imports: [
    IonicPageModule.forChild(IslandsPage),
  ],
})
export class IslandsPageModule {}
