import {CompanyDetailsInterface} from "./company-interface";
import {AddressDetailsInterface} from "./address-details-interface";

export interface UserDetailsInterface {

  id: number;
  name: string;
  username:string;
  email:string;
  address: AddressDetailsInterface;
  phone:string;
  website:string;
  company: CompanyDetailsInterface;

}
