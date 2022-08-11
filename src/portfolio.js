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
    'Hi, I am Prakhar Ojha, an undergrad at IIIT Surat. I have a keen interest in learning about Backend, Blockchain, and Open Source as well as distributed systems. I am often working on projects, collaborating in hackathons, or solving some questions on leetcode :)',
  resume: 'https://www.canva.com/design/DAErr6jyelU/waoUbdMDcc9KBiX1lDPBHw/view?utm_content=DAErr6jyelU&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton',
  social: {
    linkedin: 'https://www.linkedin.com/in/prakhar-ojha/',
    github: 'https://github.com/prakhar728',
    leetcode:'https://leetcode.com/prakhar427/'
  },
}

const projects = [
  {
    name: 'College Name Service',
    description:
      'Register your very own .IIIT Domains on top of the Polygon Blockchain!',
    stack: ['ReactJs', 'Solidity','Javascript'],
    sourceCode: 'https://github.com/prakhar728/College_Name_Service',
    livePreview: 'https://cnsme.netlify.app/',
  }, 
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
  }
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

const Experiences =
  [
    {
      Title:'ReactJs Developer',
      CName:'Yehlo Solutions',
      SD:'Dec \' 21',
      ED:'Dec \' 21',
      purposeList:[
        'Worked as a Freelance developer on ReactJs',
        'Used Material UI to conver Adobe Design into working React',
        'Used React-Redux to make a working Store'
      ]
    },
    {
      Title:'Blockchain Intern',
      CName:'GetStan Tech Pvt Ltd',
      SD:'Dec \' 21',
      ED:'Pres',
      purposeList:[
        'Develop Well Tested and formatted Smart Contracts',
        'Work on the Ethereum Blockchain to Build over ERC721 and ERC721A',
        'Integrate the contracts with the backend using ethers'
      ]
    }
  ]

export { header, about, projects, skills, contact,Experiences }
