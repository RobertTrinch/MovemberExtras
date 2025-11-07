'use client'

import { useEffect, useState } from 'react'
import { MovemberMember } from '@/interfaces/MovemberMember'
import { fetchMemberData } from '@/helpers/ApiHelper'
import styles from './GoalOverlay_default.module.scss'

export default function GoalOverlayPage_Default({
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

  if (data === null) return <h1>Loading...</h1>

  return <>
    <div className={styles.goalContainer}>
      <div className={styles.goalText}>
        <h2 className={styles.amountRaised}>Raised: {data.AmountRaised.originalCurrencySymbol}{Number(data.AmountRaised.originalAmount).toLocaleString()}</h2>
        <h2 className={styles.goalTitle}>Goal: {data.AmountRaised.originalCurrencySymbol}{Number(data.targetAmount).toLocaleString()}</h2>
      </div>
      <progress className={styles.progressBar} value={(data.AmountRaised.originalAmount / data.targetAmount) * 100} max={100} />
    </div>
  </>
}
