import { fetchNewsfeedMovemberData } from '@/helpers/MovemberApiHelper'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(
  _request: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  const { id } = await context.params
  const data = await fetchNewsfeedMovemberData(id)

  if (data === null) {
    return NextResponse.json({ error: 'Failed to fetch data' }, { status: 500 })
  }

  return NextResponse.json(data)
}
