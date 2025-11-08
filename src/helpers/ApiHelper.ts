import axios from 'axios'
import type { MovemberMember } from '../interfaces/MovemberMember'

const apiBaseUrl = '/api/movember-member/'

export async function fetchMemberData(movemberId: string): Promise<MovemberMember> {
  const { data, status, statusText } = await axios.get<MovemberMember>(`${apiBaseUrl}${movemberId}`, {
    headers: { Accept: 'application/json' },
  })

  if (status !== 200) {
    throw new Error(`Failed to fetch member data through API: ${statusText}`)
  }

  return data
}
