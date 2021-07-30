import { Place } from './../place.model';
import { PlaceService } from './../place.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-discover',
  templateUrl: './discover.page.html',
  styleUrls: ['./discover.page.scss'],
})
export class DiscoverPage implements OnInit {

  public places: Place[];

  constructor(
    private placeService: PlaceService,
    private router: Router
  ) {}

  ngOnInit() {
    this.places = this.placeService.places;
    console.log("OnInit");
  }
  
  onPlaceDetailNavigate(place: Place) {
    this.router.navigate(['/', 'places', 'tabs', 'discover', place.id]);
  }
  
  ionViewWillEnter() {
    console.log("ionViewWillEnter");
  }

}
