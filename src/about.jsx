import myimg from "./assets/1.png"
import "./about.css"
function About(){
 return <div className="aboutmain2 aboutmain">
       <div className="imgdiv">
        <img src={myimg}  className="img"></img>
    </div>
    <div>
    <h4>ABOUT ME</h4>
    <p>
       Hi, I'm Anish — a Computer Science student and full-stack developer who enjoys turning ideas into useful, polished web products.
<br></br>
I work across the stack: shaping responsive interfaces with HTML, CSS, JavaScript, and React, connecting them to APIs and data, and learning the engineering practices that make products dependable.
<br></br>
I enjoy blending creativity with technology—whether that means designing a smooth user experience, building an interactive application, or making a feature feel simple and intuitive. My goal is to build products that are useful, maintainable, and memorable.
<br></br>
Currently, I'm focused on growing as a full-stack developer, strengthening my backend and database fundamentals, and shipping better end-to-end projects.
    </p>
    </div>
 
    </div>


}
export default About;