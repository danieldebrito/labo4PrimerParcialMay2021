import { Injectable } from '@angular/core';
import { Pais } from 'src/app/class/pais';
import { BaseService } from './base.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GitService {

  constructor(public miHttp: BaseService) { }

  public ListarO(): Observable<any> {
    return this.miHttp.httpGetO<any>('/danieldebrito');
  }

  public TraerUno(): Observable<any> {
    return this.miHttp.httpGetO<any>('/danieldebrito');
  }

}
