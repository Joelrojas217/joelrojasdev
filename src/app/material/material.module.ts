import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatTabsModule} from '@angular/material/tabs';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatSidenavContainer} from '@angular/material/sidenav';


@NgModule({
declarations: [],
imports: [
    CommonModule,
    MatTabsModule,
     MatSidenavModule,
     MatSidenavContainer
     
],
exports: [
    MatTabsModule,
    MatSidenavContainer
]

})
export class MaterialModule {}