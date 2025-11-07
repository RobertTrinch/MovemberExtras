import { fetchMemberMovemberData } from '@/helpers/MovemberApiHelper'
import { NextResponse } from 'next/server'

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const { id } = await params
  const data = await fetchMemberMovemberData(id)

  if (data === null) {
    return NextResponse.json({ error: 'Failed to fetch data' }, { status: 500 })
  }

  return NextResponse.json(data)
}
