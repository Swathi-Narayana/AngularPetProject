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
    const url = `${this.baseUrl}/PostStudentInfo`;
    return this.http.post<Student>(url, student);
  }
  updateStudent(student: Student): Observable<Student> {
    const url = `${this.baseUrl}/UpdateStudentInfo/${student.id}`;
    return this.http.put<Student>(url, student);
  }
  getStudentById(student: Student): Observable<any> {
    const url = `${this.baseUrl}/GetStudentInfoById/${student}`;
    return this.http.get<any>(url);
  }
  deleteStudent(student: Student["id"]): Observable<any> {
    const url = `${this.baseUrl}/delStudentInfo/${student}`;
    return this.http.delete<Student>(url);
  }

}
