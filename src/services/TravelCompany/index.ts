import api from '../../config/api'
import { TravelInputDTO } from '../../models/interfaces/Travel'
const path = '/travel-company'

const createTravel = (travel: TravelInputDTO, id: number) =>
  api.post(`${path}/${id}/travels`, travel)
    .then((response) => response.data)

export { createTravel }