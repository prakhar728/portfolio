import React, { useEffect} from 'react'
import uniqueid from 'uniqid';
import { Experiences } from '../../portfolio';
import ExperienceCard from '../ExperienceCard/ExperienceCard';
import './Experience.css';
// import uniqid from 'uniqid';
const Experience = () => {
  useEffect(() => {
    console.log('W');
  }, [])

  return (
    <section className='section experience' id='experience'>
      <h2 className='section__title'>Experience</h2>
      <section className='experienceWrapper'>
        <div className='exprienceStart'>
          &nbsp;
        </div>
              

         {/* THIS WILL BE MAPPED */}
        {Experiences.map((exp,key)=>(
          key%2===0?(
            <div className='upperWrapper' key={uniqueid()}>
            <div className='verticalLine'>
          &nbsp;
        </div>
        <div className='outerCardWrapperRight'>
          <div className='blankDiv'>
          &nbsp;&nbsp;
          </div>
          <ExperienceCard Title={exp.Title} CName={exp.CName} SD={exp.SD} ED={exp.ED} purposeList={exp.purposeList} />
        </div>
        </div>
        ):(
          <div  className='upperWrapper' key={uniqueid()}>
            <div className='verticalLine'>
          &nbsp;
        </div>
        <div className='outerCardWrapperLeft'>
          <div className='blankDiv'>
          &nbsp;&nbsp;
          </div>
          <ExperienceCard Title={exp.Title} CName={exp.CName} SD={exp.SD} ED={exp.ED} purposeList={exp.purposeList} />
        </div>
        </div>
        )
          
        ))}
      </section>
    </section>
  )
}

export default Experience