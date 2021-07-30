import { PlaceService } from './../../place.service';
import { NavController } from '@ionic/angular';
import { Place } from './../../place.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-offer-bookings',
  templateUrl: './offer-bookings.page.html',
  styleUrls: ['./offer-bookings.page.scss'],
})
export class OfferBookingsPage implements OnInit {

  place: Place;

  constructor(
    private navController: NavController,
    private route: ActivatedRoute,
    private placeService: PlaceService
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params: Params) => {
      if(!params.has('placeId')) {
        this.navController.navigateBack('/places/tabs/offers');
        return;
      }
      this.place = this.placeService.getPlace(params.get('placeId'));
      console.log(this.place);
    });
  }

}
