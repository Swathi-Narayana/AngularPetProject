import { Injectable } from '@angular/core';
import { Observable} from 'rxjs/internal/Observable';
import { Student } from '../interface/student';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModelPopUpEditService {
  private baseUrl = "http://localhost:7294/api";
  private myBehaviorSubject = new BehaviorSubject<string>('1');
  http: any;
  public data =new BehaviorSubject("")
  currentData=this.data.asObservable();

  constructor() { }
  isEditModalVisible = false;
  showEditModal(): void {
    this.isEditModalVisible = true;
  }

  hideEditModal(): void {
    this.isEditModalVisible = false;
  }
  setData(data: any)
  {
    this.data.next(data);
  }
}
