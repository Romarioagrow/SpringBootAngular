import {BehaviorSubject, Subject} from "rxjs";
import {Injectable} from "@angular/core";
import {Product} from "./product";

@Injectable()
export class SharedDataService {
  tableProducts: Product[];

  // private missionAnnouncedSource = new Subject<Product>();
  private missionConfirmedSource = new Subject<Product>();

  // Observable string streams
  // missionAnnounced$ = this.missionAnnouncedSource.asObservable();
  missionConfirmed$ = this.missionConfirmedSource.asObservable();

  constructor() {
  }


  addNewProduct(product: Product) {
    this.missionConfirmedSource.next(product);
  }


  /*public editDataDetails: any = [];

  public subject = new Subject<any>();

  private messageSource = new BehaviorSubject(this.editDataDetails);
  currentMessage = this.messageSource.asObservable();

  changeMessage(message: string) {
    this.messageSource.next(message);
  }*/

}
