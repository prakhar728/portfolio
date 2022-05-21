import React, { useEffect} from 'react'
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
          key%2===0?(<div className='experienceCardHolderRight' id='goRight'>
          <div className='cardLine'>
               <div className='lineWrapper'><hr /></div>
              </div>
          <div>
            <ExperienceCard Title={exp.Title} CName={exp.CName} SD={exp.SD} ED={exp.ED} purposeList={exp.purposeList} />
          </div>
        </div>):(
          <div className='experienceCardHolderLeft' id='goLeft'>
          <div className='cardLine'>
               <div className='lineWrapper'><hr /></div>
              </div>
          <div>
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