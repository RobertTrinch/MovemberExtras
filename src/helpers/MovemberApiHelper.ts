import axios from 'axios'
import type { MovemberMember } from '../interfaces/MovemberMember'

const movemberBaseUrl = 'https://api.movember.com/v22/member/'

export async function fetchMemberMovemberData(movemberId: string): Promise<MovemberMember> {
  const { data, status, statusText } = await axios.get<MovemberMember>(`${movemberBaseUrl}${movemberId}`, {
    headers: { Accept: 'application/json' },
  })

  if (status !== 200) {
    throw new Error(`Failed to fetch Movember data: ${statusText}`)
  }

  return data
}
