import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditProductModalPageRoutingModule } from './edit-product-modal-routing.module';

import { EditProductModalPage } from './edit-product-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditProductModalPageRoutingModule
  ],
  declarations: [EditProductModalPage]
})
export class EditProductModalPageModule {}
