import {AddressInterface} from "./address";

export interface UserInterface {

  id: number;
  name: string;
  username:string;
  email:string;
  address: AddressInterface;

}
