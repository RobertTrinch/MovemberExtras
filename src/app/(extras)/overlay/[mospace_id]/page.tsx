import { fetchMemberMovemberData } from "@/helpers/MovemberApiHelper"
import MovemberPage from "./MovemberOverlay"

export default async function Page({ params }: { params: Promise<{ mospace_id: string }> }) {
  const { mospace_id } = await params
  const request = await fetchMemberMovemberData(mospace_id)
  if (request !== undefined) {
    console.log(request)
    return (
        <MovemberPage mospaceId={mospace_id} initialData={request} />
    )
  } else {
    return (
      <h1>error</h1>
    )
  }
}