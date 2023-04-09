export interface TravelInputDTO {
  Price: number
  BusID: number
  Arrival: {
    CityID: number
    Time: string
  }
  Departure: {
    CityID: number
    Time: string
  }
}