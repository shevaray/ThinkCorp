import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoutesRoutingModule } from './routes-routing.module';
import { SharedModule } from '../shared/shared.module';

import { SidebarComponent } from 'src/app/layout/default/sidebar/sidebar.component';
import { HeaderComponent } from 'src/app/layout/default/header/header.component';
import { DefaultComponent } from 'src/app/layout/default/default.component';
import { OverviewComponent } from './overview/overview.component';
import { ReconciledPaymentsComponent } from './components/reconciled-payments.component';
import { UnreconciledPaymentsComponent } from './components/unreconciled-payments.component';
import { AllPaymentsComponent } from './components/all-payments.component';
import { ManualSettlementComponent } from './components/manual-settlement.component';
import { AllOrdersComponent } from './components/all-orders.component';
import { PendingOrdersComponent } from './components/pending-orders.component';
import { ReconciledOrdersComponent } from './components/reconciled-orders.component';
import { MerchantProfileComponent } from './components/merchant-profile.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    DefaultComponent,
    HeaderComponent,
    SidebarComponent,
    OverviewComponent,
    ReconciledPaymentsComponent,
    UnreconciledPaymentsComponent,
    AllPaymentsComponent,
    ManualSettlementComponent,
    AllOrdersComponent,
    PendingOrdersComponent,
    ReconciledOrdersComponent,
    MerchantProfileComponent,
  ],
  imports: [
    CommonModule,
    RoutesRoutingModule,
    SharedModule,
    Ng2SearchPipeModule,
    FormsModule,
  ],
})
export class RoutesModule { }
