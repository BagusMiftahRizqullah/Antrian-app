import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { VisitorService}  from 'src/services/visitor.service';
import { Visitor } from '../interfaces/visitor';
@Component({
  selector: 'app-visitor-list',
  templateUrl: './visitor-list.component.html',
  styleUrls: ['./visitor-list.component.css']
})
export class VisitorListComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;


  public pageSizeCount: number[] = [10, 25, 100];
  public displayedColumns: string[] = ["no_antrian",  "name", "pic", "address", "contact_no","visitorId"];
  public dsVisitors: MatTableDataSource<Visitor>;

  constructor(private visitorSV: VisitorService) { }


  ngOnInit(): void {
    this.getListVisitor()
  }

  getListVisitor(){
    this.visitorSV.getListVisitor().subscribe((res: Visitor[]) => {
      let newRes = res.response;
      this.dsVisitors = new MatTableDataSource<Visitor>(newRes);
      this.dsVisitors.paginator = this.paginator;
      this.dsVisitors.sort = this.sort;

      console.log(res, 'success get visitor list');

    },(err) => {
      console.log(err, 'error from get visitor list');
    }) 
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dsVisitors.filter = filterValue.trim().toLowerCase();
  }

  onAdd() {

  }


}
