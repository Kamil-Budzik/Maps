export interface City {
  address: {
    city: string;
    countryName: string;
    county: string;
    label: string;
    postalCode: string;
    state: string;
  };
  id: string;
  localityType: string;
  position: {
    lat: number;
    lng: number;
  };
  title: string;
}