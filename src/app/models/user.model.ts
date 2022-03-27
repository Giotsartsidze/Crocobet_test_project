// model for User
export interface User {
    id: number;
    name: string;
    username: string;
    email: string;
    address: Address;
    phone: string;
    website: string;
    company: Company;
  }
  
  // model for address
  export interface Address {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
   
  }
  // model for company
  export interface Company {
    name: string;
    catchPhrase: string;
    bs: string;
  }
  