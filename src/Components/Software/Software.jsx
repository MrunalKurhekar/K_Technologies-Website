import React from 'react'
import './Software.css'
import program_1 from '../../assets/program-1.jpg'
import program_2 from '../../assets/program-2.jpg'
import program_3 from '../../assets/program-3.jpg'
import program_icon_1 from '../../assets/program-icon-1.png'
import program_icon_2 from '../../assets/program-icon-2.png'
import program_icon_3 from '../../assets/program-icon-3.png'


const Software = () => {
  return (
    <div className='software' id="software">
      <div className="softwares">
        <img src={program_1} alt="" />
        <div className="caption">
          <img src={program_icon_1} alt=""/>
          <p>Development</p>
        </div>
      </div>
      <div className="softwares">
        <img src={program_2} alt="" />
        <div className="caption">
          <img src={program_icon_2} alt=""/>
          <p>Customer Case Study</p>
        </div>
      </div>
      <div className="softwares">
        <img src={program_3} alt="" />
        <div className="caption">
          <img src={program_icon_3} alt=""/>
          <p>Deployment</p>
        </div>
      </div>
    </div>
  )
}
export default Software
