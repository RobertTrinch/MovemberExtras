import { fetchMemberMovemberData } from '@/helpers/MovemberApiHelper'
import { MovemberMember } from '@/interfaces/MovemberMember'
import AlertsOverlay_Default from './AlertsOverlay_default'

export default async function Page({ params }: { params: Promise<{ mospace_id: string }> }) {
  const { mospace_id } = await params
  const request = await fetchMemberMovemberData(mospace_id) as MovemberMember
  if (request !== undefined || request !== null) {
    if(request.AmountRaised === null || request.AmountRaised === undefined) {
      return (
        <h1 style={{ color: 'white', backgroundColor: 'rgba(0,0,0,0.5)', padding: '12px', borderRadius: '4px', fontFamily: 'Arial, sans-serif' }}>An error occurred fetching the profile, did you put in the correct ID?</h1>
      )
    }
    console.log('Rendering Alerts overlay for ' + mospace_id + ' - ' + request.fullName)
    return <AlertsOverlay_Default mospaceId={mospace_id} />
  } else {
    return (
      <h1 style={{ color: 'white', backgroundColor: 'rgba(0,0,0,0.5)', padding: '12px', borderRadius: '4px', fontFamily: 'Arial, sans-serif' }}>An error occurred fetching the profile, did you put in the correct ID?</h1>
    )
  }
}
