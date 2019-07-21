import { Student } from './../shared/student';
import { ApiService } from './../shared/api.service';
import { Component, ViewChild, OnInit, Input } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-students-list',
  templateUrl: './students-list.component.html',
  styleUrls: ['./students-list.component.css']
})

export class StudentsListComponent implements OnInit {
  dataLoaded: Promise<boolean>;
  StudentData: any = [];
  dataSource: MatTableDataSource<Student>;
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  displayedColumns: string[] = ['_id', 'name', 'email', 'class', 'action'];
  @Input() students: Student;

  constructor(private studentApi: ApiService) {
  
  }

  ngOnInit() {
    this.studentApi.GetStudents().subscribe(data => {
      console.log(data);
      this.StudentData = data;
      this.dataSource = new MatTableDataSource<Student>(this.StudentData.students);
      setTimeout(() => {
        this.dataSource.paginator = this.paginator;
      }, 0);
      console.log(this.dataSource);
      this.dataLoaded = Promise.resolve(true);
    })    
   }

  deleteStudent(index: number, e){
    if(window.confirm('Are you sure?')) {
      const data = this.dataSource.data;
      data.splice((this.paginator.pageIndex * this.paginator.pageSize) + index, 1);
      this.dataSource.data = data;
      this.studentApi.DeleteStudent(e._id).subscribe()
    }
  }

}