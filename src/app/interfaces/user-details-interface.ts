import {IAddressDetails} from "./address-details-interface";
import {ICompanyDetails} from "./company-details-interface";


export interface IUserDetails {

  id: number;
  name: string;
  username:string;
  email:string;
  address: IAddressDetails;
  phone:string;
  website:string;
  company: ICompanyDetails;

}
