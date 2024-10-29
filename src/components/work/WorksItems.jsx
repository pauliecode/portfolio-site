import React from 'react'

const WorksItems = ({ item }) => {



    return (
        <div className="work__card" key={item.id}>
            <a href={item.link} target='_blank' rel="noreferrer">
                <img src={item.image} alt="" className='work__img'/>
            </a>

            <h3 className="work__title">{item.title}</h3>
            <div className='links'>
                {item.link && (
                    <a href={item.link} className="work__button" target='_blank' rel="noreferrer">
                        Live Link
                        <i className="bx bx-right-arrow-alt work__button-icon"></i>
                    </a>
                )}
                {item.link2 && (
                    <a href={item.link2} className="work__button" target='_blank' rel="noreferrer">
                        GitHub Link
                        <i className="bx bx-right-arrow-alt work__button-icon"></i>
                    </a>
                )}
            </div>

        </div>
    )
}

export default WorksItems