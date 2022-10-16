import React, {useState} from 'react';
import './style.css'

function RegistrationForm() {
    const [username, setUsername] = useState();
    const [email, setEmail] = useState();
    const [semester, setSemester] = useState();
    const [course, setCourse] = useState();
    const [comment, setComment] = useState();
 
    // Check course availability
    const handleSubmit=()=> {
        fetch("http://localhost:4000/api/courses/courseID/" + course, {
            method: 'GET'
        }) //Route in the backend
        .then((response) => response.json())
        .then((response) => {
            var str = JSON.stringify(response);
            var obj = JSON.parse(str);
            var registeredStudents = +obj.registered;
            var capacityStudents = +obj.capacity
            // If the course is under capacity, then we can register for the student
            if (registeredStudents < capacityStudents) {
                var newRegistered = registeredStudents+1;
                updateCourse(newRegistered);
                registerCourse();
                alert("Congratulations! \nYou have been registered to course: " + obj.courseName + 
                    ". \nThe registered/capacity is now " + newRegistered + "/" + capacityStudents);
            } 
            // If the course is up to the capacity, then we can not register
            else {
                alert("Sorry! The course is full of capacity " + capacityStudents + ".");
            }
        })
        .catch(console.error);
    }

    const updateCourse=(newRegistered)=> { // Once the form has been submitted, this function will post to the backend 
        const putURL = "http://localhost:4000/api/courses/courseID/" + course //Route in the backend
        fetch(putURL, {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                registered: newRegistered
            })
        })
    }

    // Submit registeration request
    const registerCourse=()=> { // Once the form has been submitted, this function will post to the backend
        const postURL = "http://localhost:4000/api/registeration" //Route in the backend
        fetch(postURL, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username: username,
                email: email,
                semester: semester,
                course: course,
                comment: comment
            })
        })
    }

    return(
      <form className="form" onSubmit={handleSubmit}>
          <div className="form-body">
              <div className="username">
                  <label className="form__label" for="username">Full Name </label>
                  <input className="form__input" type="text" id="username" placeholder="Full Name" onChange={(e)=>{setUsername(e.target.value)}} />
              </div>
              <div className="email">
                  <label className="form__label" for="email">Email </label>
                  <input  type="email" id="email" className="form__input" placeholder="Email" onChange={(e)=>{setEmail(e.target.value)}} />
              </div>
              <div className="semester">
                  <label className="form__label" for="semester">Semester </label>
                  <input  type="form__input" id="semester" className="form__input" placeholder="Semester" onChange={(e)=>{setSemester(e.target.value)}} />
              </div>
              <div className="course">
                <label for="course">Choose a course to register </label>
                <select name="course" id="course" onChange={(e)=>{setCourse(e.target.value)}}>
                    <option disabled selected value> -- select a course -- </option>
                    <option value="math">Math</option>
                    <option value="physics">Physics</option>
                    <option value="art">Art</option>
                    <option value="pe">PE</option>
                </select>
              </div>
              <div className="comment">
                  <label className="form__label" for="comment">Comment </label>
                  <input className="form__input" type="form__input"  id="comment" placeholder="Comment" onChange={(e)=>{setComment(e.target.value)}} />
              </div>
          </div>
          <div class="footer">
              <button type="submit" class="btn">Register</button>
          </div>
      </form>      
    )       
}
export default RegistrationForm;