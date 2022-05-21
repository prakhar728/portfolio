import React, { useEffect } from 'react'
import './ExperienceCard.css';
import uniqid from 'uniqid'

const ExperienceCard = ({Title,CName,SD,ED,purposeList}) => {
    useEffect(() => {
      console.log('Experience Card');
    }, [])
    
    return (
        <div className='cardWrapper'>
            <div className='jobTitle'>
                {Title}
            </div>
            <div className='details'>
                <div className='companyName'>
                   {CName}
                </div>
                <div className='jobDates'>
                    {/* <div>Dec &apos;21</div> */}
                    <div>{SD}</div>
                    {SD && <div>-</div>}
                    <div>{ ED }</div>
                </div>
            </div>
            <div className='purpose'>
               {purposeList && <ul>
                {purposeList.map(list=>(
                    <li key={uniqid()}>{list}</li>
                ))}
                </ul>}
                
            </div>
        </div>
    )
}

export default ExperienceCard