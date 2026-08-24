import { Images } from "../utils/images"

function Loading() {
  return (
    <>
      <div className="w-full h-screen bg-white dark:bg-slate-900 flex items-center justify-center">
        <Images.LoadingIcon />
      </div>
    </>
  )
}
export default Loading