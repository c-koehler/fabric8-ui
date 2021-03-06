import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { MomentModule } from 'angular2-moment';

import { LoadingWidgetModule } from '../../dashboard-widgets/loading-widget/loading-widget.module';
import { FeatureFlagModule } from '../../feature-flag/feature-flag.module';
import { RecentPipelinesWidgetComponent } from './recent-pipelines-widget.component';


@NgModule({
  imports: [CommonModule, FormsModule, LoadingWidgetModule, RouterModule, MomentModule, FeatureFlagModule ],
  declarations: [RecentPipelinesWidgetComponent],
  exports: [RecentPipelinesWidgetComponent]
})
export class RecentPipelinesWidgetModule { }
