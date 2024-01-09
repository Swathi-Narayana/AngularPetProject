import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Student } from '../interface/student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  loadStudentData(studentToShow: Student) {
    throw new Error('Method not implemented.');
  }

  private baseUrl = "http://localhost:7294/api";

  constructor(private http: HttpClient) { }

  getAllStudents(): Observable<Student[]> {
    const url = `${this.baseUrl}/getallstudentinfo`;
    return this.http.get<Student[]>(url);
  }

  postStudent(student: Student): Observable<Student> {
    const url = `${this.baseUrl}/PostStudentInfo/${student.id}`;
    return this.http.post<Student>(url, student);
  }
  updateStudent(student: Student): Observable<Student> {
    const url = `${this.baseUrl}/UpdateStudentInfo/${student.id}`;
    return this.http.put<Student>(url, student);
  }
  getStudentById(studentid: string): Observable<any> {
    const url = `${this.baseUrl}/GetStudentInfoById/${studentid}`;
    return this.http.get<Student>(url);
  }
  deleteStudent(studentid: string): 
  
  Observable<any> {

    console.log(studentid);
    const url = `${this.baseUrl}/delStudentInfo/${studentid}`;
    return this.http.delete<Student>(url);
  }

}
