import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Empleado} from './Empleado';

@Injectable({
  providedIn: 'root'
})
export class CrudService {
  API:string='http://localhost/empleados-api/';

  constructor(private clientHttp:HttpClient) { }

  AgregarEmpleado(datosEmpleado:Empleado):Observable<any> {
    return this.clientHttp.post(this.API+"?insertar=1",datosEmpleado);
  }

  ObtenerEmpleados(){
    return this.clientHttp.get(this.API);
  }

  borrarEmpleado(id:any):Observable<any>{
    return this.clientHttp.get(this.API+"?borrar="+id);
  }

  ObtenerEmpleado(id:any):Observable<any>{
    return this.clientHttp.get(this.API+"?consultar="+id);
  }

  EditarEmpleado(id:any,datosEmpleado:Empleado):Observable<any>{
    return this.clientHttp.post(this.API+"?actualizar="+id,datosEmpleado);
  }
}
