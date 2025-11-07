import { fetchMemberMovemberData } from "@/helpers/MovemberApiHelper"
import GoalOverlayPage from "./GoalOverlay_default"
import GoalOverlayPage_Default from "./GoalOverlay_default"
import GoalOverlayPage_Blue from "./GoalOverlay_blue"

export default async function Page({ params }: { params: Promise<{ theme: string, mospace_id: string }> }) {
  const { theme, mospace_id } = await params
  const request = await fetchMemberMovemberData(mospace_id)
  if (request !== undefined) {
    console.log(theme)
    if(theme === null || theme === undefined) {
      return (
        <GoalOverlayPage mospaceId={mospace_id} initialData={request} />
      )
    }

    if (theme[0] === 'default') {
      return (
        <GoalOverlayPage_Default mospaceId={mospace_id} initialData={request} />
      )
    }
    if(theme[0] === 'blue') {
      return (
        <GoalOverlayPage_Blue mospaceId={mospace_id} initialData={request} />
      )
    } 
    
    else {
      return (
        <GoalOverlayPage mospaceId={mospace_id} initialData={request} />
      )
    }

  } else {
    return (
      <h1>error</h1>
    )
  }
}