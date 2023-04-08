// Revisar dados necessários para output

import PermissionLevelEnum from '../enums/PermissionLevel'

export default interface CompanyInterfaceOutputDTO {
  ID: number
  FantasyName: string
  PermissionLevel: PermissionLevelEnum
}