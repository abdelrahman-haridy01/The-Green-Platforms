import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource, MatTable } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { MatSort } from '@angular/material/sort';
import { DeleteDialogComponent } from './../../shared/components/delete-dialog/delete-dialog.component';
import { ToastrService } from 'ngx-toastr';
import { ROOMALLOTMENT_DATA } from 'src/app/shared/dumy-data';
import { StaticDataService } from 'src/app/shared/services/static-data.service';
import { take } from 'rxjs/operators';
import { RoomAllotmentDto } from 'src/app/shared/dto/room-allotment-dto';

@Component({
  selector: 'app-room-allotment',
  templateUrl: './room-allotment.component.html',
  styleUrls: ['./room-allotment.component.scss']
})
export class RoomAllotmentComponent implements AfterViewInit {
  displayedColumns: string[] = [
    'id',
    'parientName',
    'doctorName',
    'roomNumber',
    'roomType',
    'status',
    'allotmentDate',
    'dischargeDate',
    'actions'
  ];
  dataSource = new MatTableDataSource<RoomAllotmentDto>(ROOMALLOTMENT_DATA);

  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;
  @ViewChild(MatTable, { static: true }) table!: MatTable<RoomAllotmentDto>;
  @ViewChild(MatSort)
  sort!: MatSort;

  constructor(
    public dialog: MatDialog,
    private toastr: ToastrService,
    private staticDataService: StaticDataService
  ) {
    // Get data from "item form" and run add new item function
    this.staticDataService.selectedItem$
      .pipe(take(1))
      .subscribe((value: any) => {
        if (
          value &&
          value['dataType'] == 'room-allotment' &&
          Object.keys(value).length != 0
        ) {
          if (value['id'] != null) {
            const objWithIdIndex = this.dataSource.data.findIndex(
              obj => obj.id === value['id']
            );
            if (objWithIdIndex > -1) {
              this.dataSource.data.splice(objWithIdIndex, 1);
            }
          } else {
            const objWithIdIndex = this.dataSource.data.findIndex(
              obj => obj.roomNumber === value['formData'].roomNumber
            );
            if (objWithIdIndex > -1) {
              this.dataSource.data.splice(objWithIdIndex, 1);
            }
          }

          this.addData(value);
        }
      });
  }

  ngAfterViewInit() {
    this.randerTable();
  }

  // Delete item
  deleteItem(id: any) {
    const dialogRef = this.dialog.open(DeleteDialogComponent);
    dialogRef.afterClosed().subscribe((result: any) => {
      if (result) {
        const objWithIdIndex = this.dataSource.data.findIndex(
          obj => obj.id === id
        );

        if (objWithIdIndex > -1) {
          this.dataSource.data.splice(objWithIdIndex, 1);
        }

        this.randerTable();
        this.toastr.success('Item deleted successfuly', 'Success', {
          timeOut: 3000,
          closeButton: true,
          progressBar: true
        });
      }
    });
  }

  // Adding item
  addData(data: any) {
    let key =
      data['id'] == null
        ? (ROOMALLOTMENT_DATA.length + 1).toString()
        : data['id'];
    let body = {
      id: key,
      parientName: data['formData'].parientName,
      doctorName: data['formData'].doctorName,
      roomNumber: data['formData'].roomNumber,
      roomType: data['formData'].roomType,
      status: data['formData'].status,
      allotmentDate: data['formData'].allotmentDate,
      dischargeDate: data['formData'].dischargeDate,
      discount: data['formData'].discount,
      total: data['formData'].total
    };
    this.dataSource.data.unshift(body);
  }

  // Searching functions
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  // Rendering the table
  randerTable() {
    this.table.renderRows();
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.dataSource.connect();
  }
}
