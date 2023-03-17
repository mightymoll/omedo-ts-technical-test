import * as haversineDistance from 'haversine-distance';

export interface Coordinates {
  lat: number;
  lng: number;
}

export interface IDrugstore {
  id: number;
  name: string;
  address: string;
  point: Coordinates;
  number_of_employees: number;
  candidate_id?: number;
}

export class DrugstoreModel implements IDrugstore {
  constructor({
    id,
    name,
    address,
    point,
    number_of_employees,
    candidate = undefined,
  }) {
    this.id = id;
    this.name = name;
    this.address = address;
    this.point = point;
    this.number_of_employees = number_of_employees;
    this.candidate_id = candidate;
  }

  id: number;
  name: string;
  address: string;
  point: Coordinates;
  number_of_employees: number;
  candidate_id?: number;

  calculateDistance(otherPoint: Coordinates): number {
    return haversineDistance(this.point, otherPoint);
  }
}
