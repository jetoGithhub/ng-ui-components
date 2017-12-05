import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'


import { MessagesFloating } from './messages-floating/messages-floating'

@NgModule({
  declarations: [
    MessagesFloating
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,

    MessagesFloating,
  ],
})
export class UIComponents { }
