import { Component, OnInit } from '@angular/core';
import { tableData } from 'src/app/core/interfaces/table-data.interface';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {
  searchText:any;

  tableData: tableData[] = [
    {
      id:'4',
      title:'Apple',
      price: '30.00',
      transactionNO: '33455',
      status: 'Pending'
    },
    {
      id:'2',
      title:'Orange',
      price: '4.00',
      transactionNO: '3335',
      status: 'Un-reconciled'
      },
    {
      id:'1',
      title:'Pineapple',
      price: '6.99',
      transactionNO: '36655',
      status: 'Reconciled'
      },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
