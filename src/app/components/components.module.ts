import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from './forms/forms.module';
import { ModaisModule } from './modais/modais.module';
import { MessagesErrorComponent } from './messages/messages-error/messages-error.component';
import { MessagesModule } from './messages/messages.module';



@NgModule({
  declarations: [
    MessagesErrorComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ModaisModule,
    MessagesModule
  ]
})
export class ComponentsModule { }
