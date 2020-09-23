import React from "react"
import pp from '../../css/Trim.jpg'
import "../../css/About.css"

const About = () => (
  
    <div className="row aboutContainer" id="about">
        <div className="col-10 aboutField">
            {/* <div className="row" id="content-header">
                <div className="col-md-12">
                    <h2>About</h2>
                </div>
            </div> */}
            <img src={pp} alt="Josh Trimble" className="img" />
            
            <p>
              A deep desire to innovate and develop are the two major factors that encouraged me to pursue the knowledge and skill to develop creative and fully functioning websites and applications to meet my clients’ needs. What I believe separates me from other developers is my intangible ability to take a vision or idea and work to transcribe this idea into a viable product. My background as a Division I athlete instilled an unmatched work ethic combined with a tremendous drive to deliver results.
            </p>
            <p>
              With 3+ years of coding experience developing numerous personal projects as well as professional business websites that incorporate various capabilities such as secure user login, video uploading, and secure payment methods – just to name a few. Many of these projects and websites were developed 100% by myself with the help of the abundant amount of resources available through node packages and API calls. The reason for this was not to avoid teamwork, as I am well aware of what teamwork can bring to the table. Instead, in my early development years I believed it to be vital that I build my knowledge and skills to a level of competency that allows me to build and deliver on all aspects of the website or application.
            </p>

            {/* <p>
              Playing football at Virginia Tech has greatly prepared me for this creative adventure as competing in a highly competitive sport that demands attention to detail and copious amounts of critical thinking crosses over nicely into tech. Outside of sports I my interests include movies, books, and podcasts. 
            </p> */}

            {/* <p>
              I passionately envision being part of a team that helps to create a revolutionary product and/or business. Although the idea has not been thought of yet, I can promise it is coming! If you would like to see examples of programs that I have created just take a scroll through the <strong>portfolio</strong> page!
            </p> */}
  
        </div>
    </div>
)

export default About