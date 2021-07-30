import { PlaceService } from './../place.service';
import { Place } from './../place.model';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.page.html',
  styleUrls: ['./offers.page.scss'],
})
export class OffersPage implements OnInit {

  public places: Place[];

  constructor(
    private router: Router,
    private placeService: PlaceService
  ) { }

  ngOnInit() {
    this.places = this.placeService.places;
  }

  onClick() {
    this.router.navigate(['/places/tabs/offers/new']);
  }

  onPlaceDetailNavigate(place: Place) {
    this.router.navigate(['/', 'places', 'tabs', 'offers', place.id]);
  }

}
