import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClimaService {
  baseurl= "http://www.7timer.info/bin/civillight.php?lon=113.2&lat=23.1&ac=0&unit=metric&output=json&tzshift=0"

  constructor(private http: HttpClient) { }

  obtenerClima(latitud, longitud) {
    return this.http.get(`http://www.7timer.info/bin/civillight.php?lon=${longitud}&lat=${latitud}&ac=0&unit=metric&output=json&tzshift=0`);
  }

}
