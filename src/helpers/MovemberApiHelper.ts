import axios from 'axios'
import type { MovemberMember } from '../interfaces/MovemberMember'
import type { MovemberPost } from '../interfaces/MovemberPost'

const movemberBaseUrl = 'https://api.movember.com/v22/'

export async function fetchMemberMovemberData(movemberId: string): Promise<MovemberMember | undefined> {
  try {
    const { data, status, statusText } = await axios.get<MovemberMember>(`${movemberBaseUrl}member/${movemberId}`, {
      headers: { Accept: 'application/json' },
    })

    if (status !== 200) {
      throw new Error(`Failed to fetch Movember data: ${statusText}`)
    }

    return data
  } catch (error) {
    console.error('Error fetching Movember data:', error)
  }
  return undefined
}

export async function fetchNewsfeedMovemberData(movemberId: string): Promise<MovemberPost[] | undefined> {
  try {
    const { data, status, statusText } = await axios.get<MovemberPost[]>(`${movemberBaseUrl}newsfeed/?entity_type=0&entity_id=${movemberId}`, {
      headers: { Accept: 'application/json' },
    })

    if (status !== 200) {
      throw new Error(`Failed to fetch Movember newsfeed data: ${statusText}`)
    }

    return data
  } catch (error) {
    console.error('Error fetching Movember newsfeed data:', error)
  }
  return undefined
}
