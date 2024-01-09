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

  studentId: any;
  private dataSubscription: Subscription | undefined;
  constructor(
    private modalDelService: ModelPopUpDelService,
    private studentService: StudentService,
    private studentEvent:StudentEventService
  ) {
    this.studentId=0
  }
 
  ngOnDestroy(): void {
    if (this.dataSubscription) {
      this.dataSubscription.unsubscribe();
    }
  }
  hideDelModal(): void {
    console.log('Hiding modal');
    this.modalDelService.hideDelModal();
    
  }
      deleteStudent(): void {
        if (this.dataSubscription) {
          this.dataSubscription.unsubscribe();
        }
    
      this.dataSubscription = this.modalDelService.currentData.subscribe(data => {
        console.log(data); 
       this.studentService.deleteStudent(data).subscribe({
        next: (response: any) => {
          this.handleDeletionResponse(response);
        },
      });
    });
  }

  private handleDeletionResponse(response: any): void {
    if (response && response.success) {
      console.log('Deleted successfully', response);
      this.hideDelModal();
      this.emitStudentDeletedEvent();
    }
  }

  private emitStudentDeletedEvent(): void {
    const success = this.studentEvent.emitStudentDeleted(this.studentId);
    console.log(success);
  }
}
