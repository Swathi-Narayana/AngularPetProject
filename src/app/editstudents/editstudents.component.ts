import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StudentService } from '../services/student.service';
import { ModelPopUpEditService } from '../services/model-pop-up-edit.service';
import { FormControl, FormGroup } from '@angular/forms';
import { Student } from '../interface/student';
import { StudentEventService } from '../services/student-event.service';

@Component({
  selector: 'app-editstudents',
  templateUrl: './editstudents.component.html',
  styleUrls: ['./editstudents.component.css']
})
export class EditstudentsComponent implements OnInit {
  studentId: any;
  student: any = {};
  students: Student[] = [];
  updateStudentForm = new FormGroup({
    id: new FormControl(''),
    Name: new FormControl(''),
    Age: new FormControl(0),
    Phone: new FormControl(''),
    Email: new FormControl('')
  });
  studenttestId: string | undefined;
  
  constructor(
    private modalEditService: ModelPopUpEditService,
    private route: ActivatedRoute,
    private studentService: StudentService,
    private studentEvent:StudentEventService
  ) {
    this.studentId = 0;
  }

  ngOnInit(): void {
    this.modalEditService.currentData.subscribe(data => {
      console.log(data);
      this.studenttestId = data;
      this.loadStudentData(this.studenttestId);
      
  
    });
  }

  loadStudentData(data: any): void {   
   console.log(data,'id')
      this.studentService.getStudentById(data).subscribe((result: any) => {
        this.updateStudentForm.patchValue(result.Data);
      });
    
  }
  

  updateStudent(): void {
    this.student = this.updateStudentForm.value;
    this.studentService.updateStudent(this.student).subscribe({
      next: (result: any) => {
        if (result && result.success) {
          console.log('Student updated successfully:', result.Data);
          this.hideEditModal();
          this.studentService.getAllStudents().subscribe((result: any) => {
            this.students = result.Data;
            console.log(this.students);
            this.studentEvent.emitStudentUpdated();
          
          });
        } else {
          console.error('Error updating student. Server response:', result);
        }
      },
    });
  }
  
  hideEditModal(): void {
    this.modalEditService.hideEditModal();
  }
}
