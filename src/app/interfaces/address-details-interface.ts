import {IGeo} from "./geo-details-interface";

export interface IAddressDetails {

  street: string;
  suite: string;
  city:string;
  zipcode:string;
  geo: IGeo;

}
