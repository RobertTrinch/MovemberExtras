import axios from 'axios'
import type { MovemberMember } from '../interfaces/MovemberMember'
import { MovemberPost } from '@/interfaces/MovemberPost'

const apiBaseUrl = '/api/'

export async function fetchMemberData(movemberId: string): Promise<MovemberMember> {
  const { data, status, statusText } = await axios.get<MovemberMember>(`${apiBaseUrl}movember-member/${movemberId}`, {
    headers: { Accept: 'application/json' },
  })

  if (status !== 200) {
    throw new Error(`Failed to fetch member data through API: ${statusText}`)
  }

  return data
}

export async function fetchNewsfeedData(movemberId: string): Promise<MovemberPost[]> {
  const { data, status, statusText } = await axios.get<MovemberPost[]>(`${apiBaseUrl}movember-newsfeed/${movemberId}`, {
    headers: { Accept: 'application/json' },
  })

  if (status !== 200) {
    throw new Error(`Failed to fetch member data through API: ${statusText}`)
  }

  return data
}
