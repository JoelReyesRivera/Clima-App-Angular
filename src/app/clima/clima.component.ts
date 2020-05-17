import { Component, OnInit } from '@angular/core';
import {ClimaService } from '../clima.service'
import {IpInfoService } from '../ip-info.service'
import {Observable} from 'rxjs'
import {delay} from 'rxjs/operators'
import {faThermometerFull,faThermometerEmpty} from '@fortawesome/free-solid-svg-icons'
import { ThrowStmt } from '@angular/compiler';
import { CommonModule } from '@angular/common'; 
@Component({
  selector: 'app-clima',
  templateUrl: './clima.component.html',
  styleUrls: ['./clima.component.css']
})
export class ClimaComponent implements OnInit {

  public dataClima : any;
  public infoIp : any;
  termometroLleno = faThermometerFull;
  termometroVacio = faThermometerEmpty;
  soleado = "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSpCEdeB05tId7K1tx7EXYcm5uLc5s8DKbjO6Bh0ivIZw8jMstP&usqp=CAU";
  rain= "https://lh3.googleusercontent.com/proxy/K-sLIKgJqg8_U_sC7NVdjYynbqNGU09z9GcBydzD0K8q2LY_nIEhbv6ndSJM8y--B6t7kojDSr8rj-CisIQKLfQ5F-eOot0h32mHyO5pzKSdK5XjseGzg6_eHqMSYwk5A-TaFsQQKVa-l-SAFKwfznrvtyBIxokYTpXGHKPubWMsevMMxLqZL-4sHsfE-k3TolJudg";
  tsrain = "https://cdn3.iconfinder.com/data/icons/weather-16/256/Storm-512.png"
  snow="https://cdn4.iconfinder.com/data/icons/weather-182/24/weather_forcast_snow_snowing_snowy-512.png";
  cloudly ="https://cdn.iconscout.com/icon/free/png-512/cloudy-weather-11-1147979.png"
  ts= "https://cdn.dribbble.com/users/2120934/screenshots/6193517/17_tstorm.gif";
  ligthsnow= "https://cdn.onlinewebfonts.com/svg/img_385026.png";
  pcloudy="https://cdn.dribbble.com/users/16114/screenshots/1671648/partly-cloudy-icon.png"
  ligthrain="https://c7.uihere.com/icons/745/796/904/light-rain-cba2ac65d1eff5d425115172dd170c04.png"
  oshower="https://simpleicon.com/wp-content/uploads/cloudy.png"
  constructor(private infoIpApi: IpInfoService, private climaApi: ClimaService) { }

  ngOnInit() {
    //this.consecutiveReqst()
    this.cargarDatos()
  }

  getImageClima(indice){
    switch (this.dataClima.dataseries[indice].weather) {
      case "rain":
        return this.rain;
        break;
      case "clear":
        return this.soleado;
        break;
      case "tsrain":
        return this.tsrain;
      break;
      case "cloudy":
        return this.cloudly;
      break;
      case "snow":
        return this.snow;
        break;
      case "ts":
        return this.ts;
        break;
      case "tsrain":
        return this.tsrain;
        break;
      case "lightsnow":
        return this.ligthsnow;
      case "pcloudy":
        return this.pcloudy;
        break;
      case "lightrain":
        return this.ligthrain;
        break;
      case "oshower":
        return this.oshower;
        break;
    }
  }//mcloudy,cloudy,snow
  //24.782119750976562  -107.39920043945312x|
  cargarDatosClima(latitud, longitud) {
      this.climaApi.obtenerClima(latitud ,longitud).subscribe(datos => {
        this.dataClima= datos;
    },
    error => {
      alert(error);
    });
  }

  cargarDatos() {
    this.infoIpApi.obtenerInfo().subscribe(datos => {
      this.infoIp= datos;
      this.cargarDatosClima(this.infoIp.latitude, this.infoIp.longitude);
  },
  error => {
    alert(error);
  });
}

  obtenerFecha(index){
    const año = this.dataClima.dataseries[index].date.toString().substring(0,4);
    const mes = this.dataClima.dataseries[index].date.toString().substring(4,6);
    const dia = this.dataClima.dataseries[index].date.toString().substring(6,8);
    return año +"-"+ mes+"-"+dia
  }

  validar(index){
    console.log(index)
    if(index==0)
      return null
    else{
      return 1
    }
  }


}
