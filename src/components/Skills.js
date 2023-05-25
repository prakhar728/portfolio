import meter1 from '../assets/img/meter1.svg'
import meter2 from '../assets/img/meter2.svg'
import meter3 from '../assets/img/meter3.svg'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import arrow1 from '../assets/img/arrow1.svg'
import arrow2 from '../assets/img/arrow2.svg'
import colorSharp from '../assets/img/color-sharp.png'
import TS from '../assets/img/languages/ts.svg'
import Solidity from '../assets/img/languages/solidity.svg'
import postgres from '../assets/img/languages/postgres.svg'
import java from '../assets/img/languages/java.svg'
import cloud from '../assets/img/languages/aws.svg'
import git from '../assets/img/languages/git.svg'
import nextjs from '../assets/img/languages/nextjs.svg'
import nodejs from '../assets/img/languages/nodejs.svg'
import mongo from '../assets/img/languages/mongodb.svg'
import 'animate.css'
export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  }

  return (
    <section className='skill' id='skills'>
      <div className='container'>
        <div className='row'>
          <div className='col-12'>
            <div className='skill-bx wow zoomIn'>
              <h2>Tech Stack</h2>
              <p>
                Delve into the realm of my skill set, where you'll find an
                arsenal of programming languages, frameworks, and <br />
                databases, ready to tackle any challenge and elevate your
                digital projects to new heights.
              </p>
              <div autoPlay interval="1000" className='skillsContainer skill-slider'>
                <div className='item glimmer'>
                  <img src={TS} alt='Typescript' />
                  Typescript
                </div>
                <div className='item glimmer'>
                  <img src={Solidity} alt='Solidity' />
                  Solidity
                </div>
                <div className='item glimmer'>
                  <img src={java} alt='JAVA' />
                  Java
                </div>
                <div className='item glimmer'>
                  <img src={nextjs} alt='Nextjs' />
                  NextJs
                </div>
                <div className='item glimmer'>
                  <img src={nodejs} alt='nodejs' />
                  Nodejs
                </div>
                <div className='item glimmer'>
                  <img src={cloud} alt='AWS' />
                  AWS
                </div>
                <div className='item glimmer'>
                  <img src={git} alt='Git' />
                  GIT
                </div>
                <div className='item glimmer'>
                  <img src={postgres} alt='postgresql' />
                  Postgresql
                </div>
                <div className='item glimmer'>
                  <img src={mongo} alt='postgresql' />
                  MongoDB
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <img className='background-image-left' src={colorSharp} alt='Image' />
    </section>
  )
}
