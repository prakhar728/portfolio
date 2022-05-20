const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://prakhar728.github.io/portfolio',
  title: 'PO.',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Prakhar Ojha',
  role: 'Blockchain/Backend Developer',
  description:
    'Currently a Sophomore at IIIT Surat. I plan to build a career in Blockchain Development and explore the opportunities in the field. ',
  resume: 'https://drive.google.com/file/d/1HqVcXZegvMoT9qsvvkrUOhBN2bxubho7/view?usp=sharing',
  social: {
    linkedin: 'https://www.linkedin.com/in/prakhar-ojha/',
    github: 'https://github.com/prakhar728',
  },
}

const projects = [
 
  {
    name: 'Daan',
    description:
      'Imagine a Donation Website where not only you could donate without a middlemen but get rewarded for it!',
    stack: ['ReactJs', 'Solidity','Javascript'],
    sourceCode: 'https://github.com/prakhar728/YoFlakes_Daan',
    livePreview: 'https://devfolio.co/projects/daan-50ea',
  },
  {
    name: 'De-Lock Crypto Wallet',
    description:
      'Learning Project aimed to understand Token deployment, transfer and Blockchain development',
    stack: ['Solidity', 'Javascript', 'React','Truffle'],
    sourceCode: 'https://github.com/prakhar728/Grunters-DevHeat-2021',
    livePreview: 'https://youtu.be/QHXZJbxrzPc',
  },
  {
    name: 'CerTube',
    description:
      'Get Certified to watch Youtube Playlist. Spending Hours of time watching palylists but no certificate to prove it\'s worth ? We got you covered.',
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com/prakhar728/CerTube_Yoflake',
    livePreview: 'https://devpost.com/software/certube',
  },
]

const skills = [
  'JavaScript',
  'TypeScript',
  'React',
  'Redux',
  'Solidity',
  'Material UI',
  'Git',
  'CI/CD',
  'Express',
  'Nodejs',
  'Chai.js',
  'PostgreSQL',
  'MongoDB',
  'Firebase',
  'Operating Sytem',
  'DBMS'
]

const contact = {
  email: 'prakharojha12@gmail.com',
}

export { header, about, projects, skills, contact }
