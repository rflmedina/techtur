import api from '../../config/api'
import CompanyInterfaceOutputDTO from '../../models/interfaces/Company'
import LoginInterface from '../../models/interfaces/Login'
const path = '/company'

const login = (logininfo: LoginInterface) =>
  api.post<CompanyInterfaceOutputDTO>(`${path}`, logininfo)
    .then((response) => response.data)

export { login }