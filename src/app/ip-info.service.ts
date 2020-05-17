import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class IpInfoService {

  baseurl= "http://api.ipstack.com/check?access_key=17137a6822ccb9d916339942d46bef7c&format=1"

  constructor(private http: HttpClient) { }

  obtenerInfo() {
    return this.http.get(this.baseurl);
  }
}
