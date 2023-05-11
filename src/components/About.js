import React, { Component } from 'react';
export default class About extends Component {
  render() {
    
    return (
      <section id="about">
         <div className="row">

            <div className="three columns">

               <img className="profile-pic"  src="images/profilepic.jpg" alt="" />

            </div>

            <div className="nine columns main-col">

               <h2>About Me</h2>
               <p>
               I am a professional front-end developer focused on creating intuitive and enjoyable user interfaces. Currently specializing in HTML, CSS and JavaScript, and developing in newer technologies such as frameworks and libraries like React.Js and Next.Js. Always looking to learn and experiment with new technologies to improve my skills.


If you are looking for a front-end developer with a strong interest in technology and skills in creating user interfaces, please contact me. We will be happy to discuss how I can help you with your projects.

               </p>

               <div className="row">

                  <div className="columns contact-details">

                  <h2>Contact Details</h2>
                  <p className="address">
       						<span>Luan Silva</span>
                     <br></br>
       						   <span>
                     Brazil
                    </span>
                    <br></br>
                    <span>https://www.linkedin.com/in/luan-silva-8a246921b/</span>
       					   </p>
                  </div>
               </div>
            </div>
         </div>
      </section>
    );
  }
}