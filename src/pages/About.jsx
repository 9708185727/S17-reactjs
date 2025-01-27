

import { useSelector } from "react-redux"
const About = () => {
  const {count}=useSelector((state)=>state.counter)
  return (
   
    <div className=''>
    THIS ABOUNT
  <div>  {
    count
  }</div>
    </div>
    
   
  )
}

export default About
