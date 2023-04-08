// Revisar conteúdos necessários para output

import PermissionLevelEnum from '../enums/PermissionLevel'

export default interface CustomerInterfaceOutputDTO {
  ID: number
  Name: string
  PermissionLevel: PermissionLevelEnum
  TicketsLeft: number
}