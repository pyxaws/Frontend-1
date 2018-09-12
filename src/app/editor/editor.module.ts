import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgZorroAntdModule } from 'ng-zorro-antd';

import { SortablejsModule } from './angular-sortablejs/src/sortablejs.module';

import { StepsService } from './core/steps.service';
import { AppendixService } from './core/appendix.service';
import { EditorReportService } from './core/editorReport.service';
import { GetDataService } from './getData/getData.service';

import { MainComponent } from './views/main/main.component';
import { StepBarComponent } from './views/step-bar/step-bar.component';
import { EditAreaComponent } from './views/edit-area/edit-area.component';
import { ButtonAreaComponent } from './views/button-area/button-area.component';
import { SubroutineComponent } from './views/subroutine/subroutine.component';
import { EditorFieldTypeComponent } from './views/editor-field-type/editor-field-type.component';
import { StepPanelComponent } from './views/step-panel/step-panel.component';

@NgModule({
  imports: [
    CommonModule,
    NgZorroAntdModule,
    FormsModule,
    SortablejsModule,
  ],
  declarations: [
    MainComponent,
    StepBarComponent,
    EditAreaComponent,
    ButtonAreaComponent,
    SubroutineComponent,
    EditorFieldTypeComponent,
    StepPanelComponent,
  ],
  providers: [
    StepsService,
    EditorReportService,
    GetDataService,
    AppendixService,
  ],
})
export class EditorModule { }
