import { Injectable } from '@angular/core';
import { Subject, subscribeOn } from 'rxjs';
import { ModelPopUpDelService } from './model-pop-up-del.service';
import { Student } from '../interface/student';
@Injectable({
  providedIn: 'root'
})
export class StudentEventService {
  private studentAddedSubject = new Subject<void>();
  private studentDeletedSubject = new Subject<Student>();
  private studentUpadtedSubject=new Subject<void>();
  studentAdded$ = this.studentAddedSubject.asObservable();
   studentDeleted$ = this.studentDeletedSubject.asObservable();
  studentUpdated$ = this. studentUpadtedSubject.asObservable();
  emitStudentAdded(): void {
    this.studentAddedSubject.next();
  }

  emitStudentDeleted(deletedStudent: Student): void {
    this.studentDeletedSubject.next(deletedStudent);
  }
  emitStudentUpdated(): void {
    this. studentUpadtedSubject.next();
  }
}


