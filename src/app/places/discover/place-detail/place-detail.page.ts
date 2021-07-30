import { PlaceService } from './../../place.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Place } from './../../place.model';
import { CreateBookingComponent } from './../../../bookings/create-booking/create-booking.component';
import { Component, OnInit } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-place-detail',
  templateUrl: './place-detail.page.html',
  styleUrls: ['./place-detail.page.scss'],
})
export class PlaceDetailPage implements OnInit {

  place: Place;

  constructor(
    private modalController: ModalController,
    private navController: NavController,
    private placeService: PlaceService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe((parmaMap: ParamMap) => {

      if(!parmaMap.has('placeId')) {
        this.navController.navigateBack('/places/tabs/discover');
        return;
      }
      this.place = this.placeService.getPlace(parmaMap.get('placeId'));
    })
  }

  onBookPlace() {
    this.modalController.create({component: CreateBookingComponent, componentProps: {selectedPlace: this.place}})
      .then(modalEl => {
        modalEl.present();
        return modalEl.onDidDismiss();
      })
      .then(resultData => {
        console.log({data: resultData.data, role: resultData.role});
        if (resultData.role === 'confirm') {
          console.log('BOOKED!');
        }
      })
  }

}
