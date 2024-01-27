import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import * as L from 'leaflet';
import { icon, Marker } from 'leaflet';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  // let latitud = '-25.28497932332968';
  // var longitud = '-57.631351571163954';

  // let defaultMarker = L.icon({
  //   iconUrl: 'assets_front/img/leaflet/marker-icon.png',
  //   iconSize: [30, 46],
  //   iconAnchor: [17, 46],
  //   popupAnchor: [-1, -25]
  // });
  private map: L.Map;
  private centroid: L.LatLngExpression = [-25.315720, -57.629064]; //

  private initMap(): void {
    this.map = L.map('map', {
      center: this.centroid,
      zoom: 12
    });

    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 18,
      minZoom: 10,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    });

    // create 5 random jitteries and add them to map


    tiles.addTo(this.map);



    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(this.map);

    var myIcon = L.icon({
      iconUrl: 'assets/marker-icon.png',
      shadowUrl: 'assets/marker-shadow.png',

    });

    L.marker([-25.315720, -57.629064], { icon: myIcon }).addTo(this.map)
      .bindPopup('Estoy aquí.')
      .openPopup();

  }
  constructor(private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.initMap();
  }
}
