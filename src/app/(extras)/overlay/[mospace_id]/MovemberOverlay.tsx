"use client";

import { useEffect, useState } from "react"
import { MovemberMember } from "@/interfaces/MovemberMember";
import { fetchMemberData } from "@/helpers/ApiHelper";

export default function MovemberPage({
  mospaceId,
  initialData,
}: {
  mospaceId: string
  initialData: MovemberMember
}) {
  const [data, setData] = useState(initialData)

  useEffect(() => {
    const interval = setInterval(async () => {
      const newData = await fetchMemberData(mospaceId)
      setData(newData)
    }, 10000)

    return () => clearInterval(interval)
  }, [mospaceId])

  if (!data) return <h1>Loading...</h1>

  return <h1>{data.fullName}</h1>
}