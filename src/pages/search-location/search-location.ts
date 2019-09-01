import {Component} from "@angular/core";
import {NavController, NavParams} from "ionic-angular";
import {Storage} from '@ionic/storage';

// import {SearchCarsPage} from "../search-cars/search-cars";

@Component({
  selector: 'page-search-location',
  templateUrl: 'search-location.html'
})

export class SearchLocationPage {
  public fromto: any;
  // places
  public places = {
    nearby: [
      {
        id: 1,
        name: "IFSC Câmpus Gaspar"
      },
      {
        id: 2,
        name: "IFC Câmpus Blumenau"
      },
      {
        id: 3,
        name: "UFSC Câmpus Blumenau"
      }
    ]/*,
    recent: [
      {
        id: 1,
        name: "IFSC Câmpus Gaspar"
      }
    ]*/
  };

  constructor(private storage: Storage, public nav: NavController, public navParams: NavParams) {
    this.fromto = this.navParams.data;
  }

  // search by item
  searchBy(item) {
    if (this.fromto === 'from') {
      window.localStorage.setItem('pickup', item.name);
    }

    if (this.fromto === 'to') {
      window.localStorage.setItem('dropOff', item.name);
    }
    // this.nav.push(SearchCarsPage);
    this.nav.pop();
  }
}
