import {DetailsGeo} from "./details-geo";

export interface AddressDetailsInterface {

  street: string;
  suite: string;
  city:string;
  zipcode:string;
  geo: DetailsGeo;

}
