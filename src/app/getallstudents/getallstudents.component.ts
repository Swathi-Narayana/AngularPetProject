
import { Component, OnInit } from '@angular/core';
import { StudentService } from '../services/student.service';
import { Student } from '../interface/student';
import { ModelPopUpService } from '../services/model-pop-up.service';
import { StudentEventService } from '../services/student-event.service';
import { ModelPopUpDelService } from '../services/model-pop-up-del.service';
import { ModelPopUpEditService } from '../services/model-pop-up-edit.service';
@Component({
  selector: 'app-getallstudents',
  templateUrl: './getallstudents.component.html',
  styleUrls: ['./getallstudents.component.css']
})
export class GetallstudentsComponent implements OnInit {
  students: Student[] = [];
  constructor(private studentService: StudentService,
    public modalService: ModelPopUpService,
    public modalDelService: ModelPopUpDelService,
    public modalEditService: ModelPopUpEditService,
    private studentEventService: StudentEventService,
  ) {

  }

  ngOnInit() {
    this.studentService.getAllStudents().subscribe((result: any) => {
      this.students = result.Data;
      console.log(this.students);
    });

    this.studentEventService.studentAdded$.subscribe(() => {
      this.refreshStudents();
    });
    this.studentEventService.studentDeleted$.subscribe(deletedStudent => {
      this.refreshStudents();
    });
    this.studentEventService.studentUpdated$.subscribe(()=> {
      this.refreshStudents();
    })
  }


  showModal(): void {
    this.modalService.showModal();
  }

  hideModal(): void {
    this.modalService.hideModal();
  }
  showDelModal(student: any): void {
    this.modalDelService.showDelModal();
    console.log(student, 'test')

    this.modalDelService.setData(student.id)
  }

  hideDelModal(): void {
    this.modalDelService.hideDelModal();

  }
  showEditModal(student: any): void {

    console.log(student, 'test')
    this.modalEditService.showEditModal();
    this.modalEditService.setData(student.id)

  }


  hideEditModal(): void {
    this.modalEditService.hideEditModal();
  }
  refreshStudents(): void {
    this.studentService.getAllStudents().subscribe((res: any) => {
      this.students = res.Data;
      console.log(this.students);
    });
  }
}
