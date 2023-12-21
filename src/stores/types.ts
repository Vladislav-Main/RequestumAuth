export type UseMeStoreState = {
  status: string;
  success: boolean;
  email: string;
  password: string;
  user: authUserType;
  setUser: (user: authUserType) => void;
  setRegUser: (email: string, password: string, user: authUserType) => void;
  logout(): void;
};

export type authUserType = {
  id: number;
  name: string;
  username: string;
  email: string;
  address: AddressType;
  phone: string;
  website: string;
  company: CompanyType;
} | null;

type AddressType = {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: GeoType;
};

type GeoType = {lat: string; lng: string};

type CompanyType = {
  name: string;
  catchPhrase: string;
  bs: string;
};
