import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import localeTh from '@angular/common/locales/th';
import { registerLocaleData } from '@angular/common';
registerLocaleData(localeTh, 'th');
import {DataViewModule} from 'primeng/dataview';
import {TableModule} from 'primeng/table';
import {ButtonModule} from 'primeng/button';
import { TagModule } from 'primeng/tag';
import { PipeProjecttypeModule } from './pipe/pipe-projecttype/pipe-projecttype.module';
import { PgPoolComponent } from './pg-pool/pg-pool.component';
import { ProjectComponent } from './pg-pool/project/project.component';
import {MenubarModule} from 'primeng/menubar';
import { EmployeeComponent } from './pg-pool/employee/employee.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import {MessagesModule} from 'primeng/messages';
import { EmployeeDetailComponent } from './pg-pool/employee/employee-detail/employee-detail.component';
import {InputTextModule} from 'primeng/inputtext';
import { ProjectDetailComponent } from './pg-pool/project/project-detail/project-detail.component';
import {CardModule} from 'primeng/card';
import { ImportExcelComponent } from './pg-pool/import-excel/import-excel.component';
import {BlockUIModule} from 'primeng/blockui';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import {ScrollPanelModule} from 'primeng/scrollpanel'
import {ChartModule} from 'primeng/chart';
import { MessageService } from 'primeng/api';
import {ToastModule} from 'primeng/toast';
import {MessageModule} from 'primeng/message';

@NgModule({
  declarations: [
    AppComponent,
    PgPoolComponent,
    ProjectComponent,
    EmployeeComponent,
    SidenavComponent,
    EmployeeDetailComponent,
    ProjectDetailComponent,
    ImportExcelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    DataViewModule,
    TableModule,
    ButtonModule,
    TagModule,
    PipeProjecttypeModule,
    MenubarModule,
    InputTextModule,
    CardModule,
    BlockUIModule,
    FormsModule,
    ScrollPanelModule,
    ChartModule,
    MessagesModule,
    ReactiveFormsModule,
    ToastModule,
    MessageModule
    
  ],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
