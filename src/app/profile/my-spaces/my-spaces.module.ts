import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Http } from '@angular/http';

import { ModalModule } from 'ngx-bootstrap/modal';
import { Fabric8WitModule } from 'ngx-fabric8-wit';
import { InfiniteScrollModule } from 'ngx-widgets';
import { ListModule } from 'patternfly-ng/list';

import { MySpacesItemActionsModule } from './my-spaces-item-actions/my-spaces-item-actions.module';
import { MySpacesItemHeadingModule } from './my-spaces-item-heading/my-spaces-item-heading.module';
import { MySpacesItemModule } from './my-spaces-item/my-spaces-item.module';
import { MySpacesRoutingModule } from './my-spaces-routing.module';
import { MySpacesToolbarModule } from './my-spaces-toolbar/my-spaces-toolbar.module';
import { MySpacesComponent }     from './my-spaces.component';

@NgModule({
  imports: [
    CommonModule,
    Fabric8WitModule,
    InfiniteScrollModule,
    ListModule,
    ModalModule.forRoot(),
    MySpacesItemModule,
    MySpacesItemActionsModule,
    MySpacesItemHeadingModule,
    MySpacesToolbarModule,
    MySpacesRoutingModule
  ],
  declarations: [ MySpacesComponent ]
})
export class MySpacesModule {
  constructor(http: Http) {}
}
