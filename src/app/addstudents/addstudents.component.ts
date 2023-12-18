import { Component, ViewChild } from '@angular/core';
import { ModelPopUpService } from '../services/model-pop-up.service';
import { StudentService } from '../services/student.service';
import { Student } from '../interface/student';
import { StudentEventService } from '../services/student-event.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GetallstudentsComponent } from '../getallstudents/getallstudents.component';
@Component({
  selector: 'app-addstudents',
  templateUrl: './addstudents.component.html',
  styleUrls: ['./addstudents.component.css']
})
export class AddstudentsComponent {
  newStudentForm: FormGroup;
  newStudent: any = {};
  errorMessage!: string;

  constructor(
    private fb: FormBuilder,
    private modalService: ModelPopUpService,
    private studentService: StudentService,
    private studentEventService: StudentEventService
  ) {
    this.newStudentForm = this.fb.group({
      id: ['', [Validators.required]],
      Name: ['', [Validators.required]],
      Age: ['', [Validators.required, Validators.pattern(/^[1-9][0-9]*$/)]],
      Phone: ['',[Validators.required, Validators.pattern(/^[0-9]{10}$/)]],
      Email: ['',[Validators.required]]
    });
  }

  addStudent(): void {
    if (this.newStudentForm.valid) {
      this.studentService.postStudent(this.newStudentForm.value).subscribe({
        next: (result: any) => {
          if (result && result.success) {
            console.log('Student added successfully:', result.Data);
            this.hideModal();
            this.studentEventService.emitStudentAdded();
          }
          else {
            this.errorMessage = result.message;
            console.error('Error adding student', result);
          }
        },
       
      });
    } 
  }
  hideModal(): void {
    this.modalService.hideModal();
  }

}