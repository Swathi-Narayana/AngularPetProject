import { Component, OnDestroy } from '@angular/core';
import { StudentService } from '../services/student.service';
import { ModelPopUpDelService } from '../services/model-pop-up-del.service';
import { Subscription } from 'rxjs';
import { Student } from '../interface/student';
import { StudentEventService } from '../services/student-event.service';

@Component({
  selector: 'app-deletestudents',
  templateUrl: './deletestudents.component.html',
  styleUrls: ['./deletestudents.component.css']
})
export class DeletestudentsComponent implements OnDestroy {

  student: any = {};
  studentId: any;
  students: Student[] = [];
  private dataSubscription: Subscription = new Subscription();
  studentEventService: any;

  constructor(
    private modalDelService: ModelPopUpDelService,
    private studentService: StudentService,
    private studentEvent:StudentEventService
  ) {
    this.studentId = 0;
  }

  ngOnDestroy(): void {
    this.dataSubscription.unsubscribe();
  }

  hideDelModal(): void {
    this.modalDelService.hideDelModal();
  }

  deleteStudent(): void {
    const DataDel = this.modalDelService.currentData.subscribe(data => {
      console.log(data);

      const studentToDelete: Student = {
        id: data,
        Name: '',
        Age: 0,
        Phone: '',
        Email: ''
      };

      this.studentService.deleteStudent(studentToDelete.id).subscribe({
        next: (response: any) => {
          if (response && response.success) {
            console.log('Deleted successfully', response);
            this.hideDelModal();
           
          }
          const l=this. studentEvent.emitStudentDeleted(studentToDelete);
          console.log(l);
        },
       
      });
    });
  }
 
}
