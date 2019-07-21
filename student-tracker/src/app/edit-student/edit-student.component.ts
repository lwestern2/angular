import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit, ViewChild, NgZone } from '@angular/core';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatChipInputEvent } from '@angular/material/chips';
import { ApiService } from './../shared/api.service';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

export interface Subject {
  name: string;
}

@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.css']
})

export class EditStudentComponent implements OnInit {
  dataLoaded: Promise<boolean>;
  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  @ViewChild('chipList', { static: true }) chipList;
  @ViewChild('resetStudentForm', { static: true }) myNgForm;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];
  studentForm: FormGroup;
  subjectArray: Subject[] = [];
  SectioinArray: any = ['CIT 366', 'CS 313', 'CIT 260', 'CIT 360', 'CIT 270'];

  ngOnInit() {
    // this.updateBookForm();
    var id = this.actRoute.snapshot.paramMap.get('id');
    console.log(id);
    this.studentApi.GetStudent(id).subscribe(data => {
      // console.log(data.subjects)
      // this.subjectArray = data.subjects;
      console.log(data.students);
      this.studentForm = this.fb.group({
        name: [data.students.name, [Validators.required]],
        email: [data.email, [Validators.required]],
        class: [data.class, [Validators.required]],
        gender: [data.gender]
      }) 
      this.dataLoaded = Promise.resolve(true);     
    })  
  }

  constructor(
    public fb: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private actRoute: ActivatedRoute,
    private studentApi: ApiService
  ) { 
      
  }

  // updateStudentForm() {
  //   this.studentForm = this.fb.group({
  //     name: ['', [Validators.required]],
  //     email: ['', [Validators.required]],
  //     class: ['', [Validators.required]],
  //     gender: ['Male']
  //   })
  // }

  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;
    if ((value || '').trim() && this.subjectArray.length < 5) {
      this.subjectArray.push({ name: value.trim() })
    }
    if (input) {
      input.value = '';
    }
  }

  remove(subject: Subject): void {
    const index = this.subjectArray.indexOf(subject);
    if (index >= 0) {
      this.subjectArray.splice(index, 1);
    }
  }

  public handleError = (controlName: string, errorName: string) => {
    return this.studentForm.controls[controlName].hasError(errorName);
  }

  updateStudentForm() {
    console.log(this.studentForm.value)
    var id = this.actRoute.snapshot.paramMap.get('id');
    if (window.confirm('Are you sure you want to update?')) {
      this.studentApi.UpdateStudent(id, this.studentForm.value).subscribe( res => {
        this.ngZone.run(() => this.router.navigateByUrl('/students-list'))
      });
    }
  }
  
}
