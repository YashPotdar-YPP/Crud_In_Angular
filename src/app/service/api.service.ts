import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { map, pipe } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  postUser(data: any) {
    return this.http.post<any>("http://localhost:5000/addContact",data)
    .pipe(map((res:any)=>{
      return res
    }))
  }
  getUser(data: any) {
    return this.http.get<any>("http://localhost:5000/getContact",data)
    .pipe(map((res:any)=>{
      return res
    }))
  }
  deleteUser(id: string) {
    return this.http.delete<any>("http://localhost:5000/deleteContact/"+id)
    .pipe(map((res:any)=>{
      return res
    }))
  }
  updateUser(id:any, data: any ) {
    return this.http.patch<any>("http://localhost:5000/updateContact/"+id,data)
    .pipe(map((res:any)=>{
      return res
    }))
  }
}
