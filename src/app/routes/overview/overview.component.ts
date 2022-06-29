import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { tableData } from 'src/app/core/interfaces/table-data.interface';
import { ListService } from 'src/app/core/services/list.service';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {
  @ViewChild('options') option!: ElementRef;

  searchText:any;

  tableData: tableData[] = [];
  tmpTableData: tableData[] = []

  constructor(private listService: ListService) { }

  ngOnInit(): void {
    this.listService
    .getTableData()
    .subscribe((res:any)=>{
      this.tmpTableData = res.map((data:any)=>{
        return data;
      })
      this.tableData = this.tmpTableData
    })
  }

  onFilterTable(){
    let option = this.option.nativeElement.value.toLowerCase()
    if (option == "all"){
      this.tableData = this.tmpTableData
    }else{
      this.tableData = this.tmpTableData.filter(data => data.status.toLowerCase() == option)
    }
  }

}
