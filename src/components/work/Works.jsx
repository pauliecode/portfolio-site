import React, { useEffect, useState } from 'react';
import { projectsData } from './Data';
import WorksItems from './WorksItems';

const Works = () => {

    const [projects, setProjects] = useState([]);

    useEffect(() => {
            setProjects(projectsData)
    }, []);


    return (
        <div>
            <div className="work__container container grid">
                {projects.map((item) => {
                    return <WorksItems item={item} key={item.id} />
                })}
            </div>
        </div>
    )
}

export default Works
