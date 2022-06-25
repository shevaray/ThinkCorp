import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultComponent } from 'src/app/layout/default/default.component';
import { AllOrdersComponent } from './components/all-orders.component';
import { AllPaymentsComponent } from './components/all-payments.component';
import { ManualSettlementComponent } from './components/manual-settlement.component';
import { MerchantProfileComponent } from './components/merchant-profile.component';
import { PendingOrdersComponent } from './components/pending-orders.component';
import { ReconciledOrdersComponent } from './components/reconciled-orders.component';
import { ReconciledPaymentsComponent } from './components/reconciled-payments.component';
import { UnreconciledPaymentsComponent } from './components/unreconciled-payments.component';
import { OverviewComponent } from './overview/overview.component';

const routes: Routes = [
  {
    path:'',
    component:DefaultComponent,
    children:[
      {
        path:'overview',
        component:OverviewComponent,
        // loadChildren: () =>
        // import('./overview/overview.component').then((m) => m.OverviewComponent),
      },
      {
        path:'reconciled-payments',
        component:ReconciledPaymentsComponent,
      },
      {
        path:'unreconciled-payments',
        component:UnreconciledPaymentsComponent,
      },
      {
        path:'all-payments',
        component:AllPaymentsComponent,
      },
      {
        path:'manual-settlement',
        component:ManualSettlementComponent
      },
      {
        path:'all-orders',
        component:AllOrdersComponent
      },
      {
        path:'pending-orders',
        component:PendingOrdersComponent
      },
      {
        path:'reconciled-orders',
        component:ReconciledOrdersComponent
      },
      {
        path:'merchant-profile',
        component:MerchantProfileComponent
      },
      {
        path:'',
        redirectTo:'/overview',
        pathMatch:'full',
      },
      {
        path:'**',
        redirectTo:'/'
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoutesRoutingModule { }
