import { useContext, useEffect } from "react"
import { Mycontext } from "../../Context/UserContext"

function Device() {
  const {setHead}=useContext(Mycontext)
  useEffect(()=>{
    setHead('Device')
  },[])
  return (
    <div>Device</div>
  )
}

export default Device