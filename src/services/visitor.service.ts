import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { Visitor } from '../app/interfaces/visitor';
import { VisitorCreate } from '../app/interfaces/visitor-create';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class VisitorService {

  constructor(private http: HttpClient) { }

  getListVisitor(): Observable <Visitor[]>  {
    
    return this.http.get<Visitor[]>(environment.BASE_URL + '/visitor/list');
  }

  createVisitor(visitor: VisitorCreate): Observable <Visitor[]>  {
    
    return this.http.post<Visitor[]>(environment.BASE_URL + '/visitor/list', visitor);
  }

  getOneVisitor(id_visitor): Observable <Visitor[]>  {
    
    return this.http.get<Visitor[]>(environment.BASE_URL + `/visitor/list/${id_visitor}`);
  }
}
