import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CadastroPostoPage } from './cadastro-posto';

@NgModule({
  declarations: [
    CadastroPostoPage,
  ],
  imports: [
    IonicPageModule.forChild(CadastroPostoPage),
  ],
  exports: [
    CadastroPostoPage
  ]
})
export class CadastroPostoPageModule {}
