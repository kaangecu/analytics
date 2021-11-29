import React,{ useContext,useState } from 'react'
import {AnalyticsContext} from '../../consts/index'

const Chart = () => {
  const [analytics, setAnalytics] = useState({})
  const response = useContext(AnalyticsContext);
   response.then((result)=>setAnalytics(result))
  return (
    <div>
      <button type="button" className="btn btn-primary" onClick={()=>{console.log(analytics)}}>Log Analytics</button>
    </div>
  )
}

export default Chart
