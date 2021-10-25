import React, {useState} from 'react'

function ProjectCardTemplate(props) {

    // const imageURL = {
    //     backgroundImage: `url(${props.link})`
    // }

    const [buttonIcon, setButtonIcon] = useState('fas fa-arrow-up');
    const handleCardOpenClose = () => {
        const image = document.getElementById(`ProjectCard__Image${props.id}`)
        const info = document.getElementById(`ProjectCard__Info${props.id}`)

        if (buttonIcon === "fas fa-arrow-up") {
            setButtonIcon('fas fa-arrow-down');
            image.classList.add("ProjectCard__Image__Blur");
            info.classList.add('ProjectCard__Info__Show');
        }
        else {
            setButtonIcon('fas fa-arrow-up');
            image.classList.remove("ProjectCard__Image__Blur");
            info.classList.remove('ProjectCard__Info__Show');
        }
    }

    return (
        <div className="ProjectCard">
            <div className="ProjectCard__Button">
                <button onClick={handleCardOpenClose}><i className={buttonIcon}></i></button>
            </div>
            <div id={`ProjectCard__Image${props.id}`} className="ProjectCard__Image"></div>
            <div id={`ProjectCard__Info${props.id}`} className="ProjectCard__Info">
                <h3><a href={props.link}>{props.title}</a></h3>
                <p>{props.description}</p>
            </div>
        </div>
    )
}

export default ProjectCardTemplate;