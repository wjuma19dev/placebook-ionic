import { ModalController } from '@ionic/angular';
import { Place } from './../../places/place.model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-booking',
  templateUrl: './create-booking.component.html',
  styleUrls: ['./create-booking.component.scss'],
})
export class CreateBookingComponent implements OnInit {

  @Input() selectedPlace: Place;

  constructor(private modalController: ModalController) { }

  ngOnInit() {}

  onCancel() {
    this.modalController.dismiss(null, 'cancel');
  }

  onBookPlace() {
    this.modalController.dismiss({message: 'This is a dummy message'}, 'confirm');
  }

}
