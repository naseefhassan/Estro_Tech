import { useContext, useEffect } from "react"
import { Mycontext } from "../../Context/UserContext"

function DashBoard() {
  const {setHead}=useContext(Mycontext)
  useEffect(()=>{
    setHead('Dashboard')
  },[])
  return (
    <div>
      <div className="w-full h-[200px]">
        Dashboard
      </div>
    </div>
  )
}

export default DashBoard