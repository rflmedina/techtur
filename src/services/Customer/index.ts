import api from '../../config/api'
import CustomerInterfaceOutputDTO from '../../models/interfaces/Customer'
import LoginInterface from '../../models/interfaces/Login'
const path = '/customer'

const login = (logininfo: LoginInterface) =>
  api.post<CustomerInterfaceOutputDTO>(`${path}`, logininfo)
    .then((response) => response.data)

const buyTicket = (customerId: number, travelId: number) =>
  api.post(`${path}/${customerId}/tickets/${travelId}`)
    .then((response) => response.data)

export { login, buyTicket }