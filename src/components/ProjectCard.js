import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl,tags,link,type }) => {
  console.log(type);
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
          <h5 className="tagHolder"> {tags?.map((lang,index)=>{
            return(
              <h6  className="languageTag" key={index}>{lang}</h6>
            )})}  
            </h5>
            <a href={link}>REPO {'->'}</a>
        </div>
      </div>
    </Col>
  )
}
