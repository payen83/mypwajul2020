import { Component, OnInit } from '@angular/core';
import { Plugins } from '@capacitor/core';
const { Geolocation } = Plugins;

declare var L: any;

@Component({
  selector: 'app-geolocation',
  templateUrl: './geolocation.page.html',
  styleUrls: ['./geolocation.page.scss'],
})

export class GeolocationPage implements OnInit {
  public coords: any = {lat: null, lng: null };

  constructor() { }

  async getCurrentPosition() {
    const coordinate = await Geolocation.getCurrentPosition();
    console.log(coordinate);
    //lat --> coordinate.coords.latitude
    //lng --> coordinate.coords.longitude

    this.coords = {
      lat: coordinate.coords.latitude,
      lng: coordinate.coords.longitude
    };

    // run map function..
    this.initMap();
  }

  initMap(){
    let mymap = L.map('mapid').setView([this.coords.lat, this.coords.lng], 13);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(mymap);

    var marker = L.marker([this.coords.lat, this.coords.lng]).addTo(mymap);

  }



  ngOnInit() {
    this.getCurrentPosition();
  }

}
