import React, {useEffect, useState} from 'react';
import Axios from 'axios';
import authHeader from '../services/auth-header';
import ModifyCourse from './modifyCourse'
const CourseGestion=()=> {

    useEffect(() => {
        fetchCourses();
      }, []);
    
      const [courses, setCourses] = useState([]);
      const URL=process.env.REACT_APP_URL
    
      const fetchCourses = () => {
        Axios.get(`${URL}/course`)
          .then(res => {
            const response = res.data;
            console.log(response);
            
            setCourses(response);
          })
        };
    return(
        <div className="big-card gestion-card">
            <h2 className="title-Green">GESTION DES COURS</h2>
                {courses.map((course) => (
                    <ModifyCourse course={course}/>
                ))}
                
        </div>
    )
}

export default CourseGestion;