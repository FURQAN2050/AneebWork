import { Component } from '@angular/core';
import { NavController, Platform, LoadingController } from 'ionic-angular';
import {
  GoogleMaps, GoogleMap, GoogleMapOptions, GoogleMapsEvent, Marker,
 } from '@ionic-native/google-maps';
  import { Geolocation, GeolocationOptions } from '@ionic-native/geolocation';
 import 'rxjs/add/operator/map'
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  map: GoogleMap;
  currPostionLat:any;
  currPostionLong:any;
  geolocoption:GeolocationOptions;
  constructor(public navCtrl: NavController,private geolocation: Geolocation,
    public googleMaps: GoogleMaps, public plt: Platform,
    public loadingCtrl:LoadingController
    
    ) {
      // this.geolocation.getCurrentPosition().then((resp) => {
      //   this.currPostionLat = resp.coords.latitude;
      //   this.currPostionLong = resp.coords.longitude;
        
      //   console.log("Lat: " + this.currPostionLat + " Long: " + this.currPostionLong);
      //   this.loadMap( );

      // }).catch((error) => {
      //   console.log(error);   
      //  });
  

  }
//  ngAfterViewInit() {
//   this.plt.ready().then(() => {
//     this.geolocation.getCurrentPosition().then((resp) => {
//       this.currPostionLat = resp.coords.latitude;
//       this.currPostionLong = resp.coords.longitude;
      
//       console.log("Lat: " + this.currPostionLat + " Long: " + this.currPostionLong);
  
//     }).catch((error) => {
//       console.log(error);   
//      });


//     this.loadMap( );
//     })
// }
  IonViewDidLoad(){
    let TIME_IN_MS = 500;
    setTimeout( () => {
         // somecode
         console.log('IonViewDidLoad');   
         this.navCtrl.setRoot(HomePage)
         
    }, TIME_IN_MS);
  }

  loadMap() {

    this.geolocoption = {
      maximumAge:1000, timeout:1000,enableHighAccuracy:true
  
    };
     this.geolocation.getCurrentPosition(this.geolocoption ).then((resp) => {
  
     
     console.log("Lat: " + resp.coords.latitude + " Long: " + resp.coords.longitude);
     let mapOptions: GoogleMapOptions = {
      camera: {
        target: {
          lat:resp.coords.latitude,
          lng:resp.coords.longitude
        
        },
        zoom: 13,
        tilt: 30
      }
    };
 
  

    this.map = GoogleMaps.create('map_canvas', mapOptions);
    this.map.one(GoogleMapsEvent.MAP_READY)
    .then(() => {
      console.log('Map is ready!');
      this.map.setMyLocationEnabled(true);
       this.map.on(GoogleMapsEvent.MAP_CLICK).subscribe( 
        (LatLng) => {
          console.log(LatLng);
         }); 
       })
       let marker: Marker = this.map.addMarkerSync({
        title: 'You are here',
        icon: '#84b14d',
        animation: 'DROP',
        draggable:true,
        position: {
          lat: resp.coords.latitude,
          lng: resp.coords.longitude
        }
      });
      marker.on(GoogleMapsEvent.MARKER_CLICK).subscribe(() => {
        // alert('clicked');
      });
 
   })
 
      
  }
  search(){
    this.navCtrl.push('SelectLocationPage')
  }
}
