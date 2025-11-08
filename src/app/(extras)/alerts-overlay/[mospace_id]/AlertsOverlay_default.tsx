'use client'

import { useEffect, useState } from 'react'
import { MovemberPost } from '@/interfaces/MovemberPost'
import { fetchNewsfeedData } from '@/helpers/ApiHelper'
import styles from './AlertsOverlay_default.module.scss'
import Image from 'next/image'

export default function AlertsOverlay_Default({
  mospaceId,
}: {
  mospaceId: string
}) {
  const [lastDonationId, setLastDonationId] = useState(0)
  const [donationInfo, setDonationInfo] = useState<MovemberPost | null>(null)
  const [alertShown, setAlertShown] = useState(false)
  const [exitingAlert, setExitingAlert] = useState(false)

  useEffect(() => {
    const interval = setInterval(async () => {

      const newData = await fetchNewsfeedData(mospaceId)
      if (newData !== undefined && newData.length > 0) {
        const latestDonation = newData.find(post => post.viewtype === 'donation')
        console.log('Latest donation:', latestDonation)
        if (latestDonation !== undefined && latestDonation.id !== lastDonationId) {
          setDonationInfo(latestDonation)
          const audioAlert = new Audio('/overlay_alert.wav')
          audioAlert.volume = 0.5
          audioAlert.play()
          setAlertShown(true)
          setLastDonationId(latestDonation.id)
          setTimeout(() => {
            setExitingAlert(true)
            setTimeout(() => {
              setAlertShown(false)
              setExitingAlert(false)
              setDonationInfo(null)
            }, 1000)
          }, 7000)
        }
      }

    }, 5000)
    return () => clearInterval(interval)
  }, [mospaceId, lastDonationId])

  return (
    <>
      {(alertShown || exitingAlert) && donationInfo !== null && (
        <div className={`${styles.alertContainer} ${exitingAlert ? styles.alertContainerExit : ''}`}>
          <Image src="/mo_icon_white.png" alt="Mo Logo" width={200} height={50} style={{ marginLeft: '100px', marginTop: '25px' }} />
          <div className={styles.alertInfoText}>
            <h2>{donationInfo.metadata.donor.name}</h2>
            <h2>{donationInfo.metadata.currency_symbol}{donationInfo.metadata.amount}</h2>
          </div>
        </div>
      )}
    </>
  )

}
