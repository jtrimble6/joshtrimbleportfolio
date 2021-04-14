import React from "react"
import pp from '../../css/Trim.jpg'
import "../../css/Bio.css"
import { UncontrolledTooltip } from 'reactstrap';

const Bio = () => (
  
    <div className="bioContainer" id="bio">
        <div className='imgContainer'>
            <img src={pp} alt="Josh Trimble" className="img" />
        </div>
        <div className='bioContent'>
          <div className='bioContentRow'>
            <div className='col-lg-4 col-sm-8 bioColumn'>
                <div className='row strengthsRow'>
                    <div className='col strengthsCol'>
                        <h3 className='strengthsTitle'>Strengths:</h3>
                        <i class="fab fa-js-square strengthIcon"></i>
                        <i class="fab fa-react strengthIcon"></i>
                        <i class="fab fa-html5 strengthIcon"></i>
                        <i class="fab fa-css3-alt strengthIcon"></i>
                        <i class="fab fa-node strengthIcon"></i>
                    </div>
                </div>
                <div className='row studyingRow'>
                    <div className='col studyingCol'>
                        <h3 className='studyingTitle'>Studying:</h3>
                        <i class="fab fa-php studyingIcon"></i>
                        <i class="fab fa-swift studyingIcon"></i>
                        <i class="fab fa-angular studyingIcon"></i>
                    </div>
                </div>
            </div>
            <div className='col-lg-8 col-sm-12 bioPersonalColumn'>
                <p className=''>Being the youngest of four brothers, you can imagine, brute force doesn't get you very far. At a young age I was force to utilize wit and creativity to navigate successfully through childhood. From this, a burning desire to advance my knowledge of all things tech was bred. Tech can be used by anyone to even the playing field for everyone. </p>
            </div>
          </div>
        </div>

        
        <div className='row connectRow'>
            <i class="fab fa-linkedin connectIcon" id="linkedInTooltip" href="https://linkedin.com/in/joshuataylortrimble" target="_blank"></i>
            <UncontrolledTooltip placement="bottom" target="linkedInTooltip">
                LinkedIn
            </UncontrolledTooltip>
            <i class="fab fa-github connectIcon" id="githubTooltip" href="https://github.com/jtrimble6" target="_blank"></i>
            <UncontrolledTooltip placement="bottom" target="githubTooltip">
                Github
            </UncontrolledTooltip>
            <i class="fas fa-file-word connectIcon" id="resumeTooltip"></i>
            <UncontrolledTooltip placement="bottom" target="resumeTooltip">
                Resume
            </UncontrolledTooltip>
        </div>

        {/* <div className="col-lg-4 col-sm-4 bioField"> */}
            {/* <div className="row" id="content-header">
                <div className="col-md-12">
                    <h2>Bio</h2>
                </div>
            </div> */}
            {/* <p className='bioContent'>Being the youngest of four brothers, you can imagine, brute force doesn't get you very far. At a young age I was force to utilize wit and creativity to navigate successfully through childhood. From this, a burning desire to advance my knowledge of all things tech was bred. Tech can be used by anyone to even the playing field for everyone. </p> */}
            {/* <p>
            A deep desire to innovate and develop are the two major factors that encouraged me to pursue the knowledge and skill to develop creative and fully functioning websites and applications to meet my clients’ needs. What I believe separates me from other developers is my intangible ability to take a vision or idea and work to transcribe this idea into a viable product. My background as a Division I athlete instilled an unmatched work ethic combined with a tremendous drive to deliver results.
            </p>
            <p>
            With 3+ years of coding experience developing numerous personal projects as well as professional business websites that incorporate various capabilities such as secure user login, video uploading, and secure payment methods – just to name a few. Many of these projects and websites were developed 100% by myself with the help of the abundant amount of resources available through node packages and API calls. The reason for this was not to avoid teamwork, as I am well aware of what teamwork can bring to the table. Instead, in my early development years I believed it to be vital that I build my knowledge and skills to a level of competency that allows me to build and deliver on all aspects of the website or application.
            </p> */}

            {/* <p>
              Playing football at Virginia Tech has greatly prepared me for this creative adventure as competing in a highly competitive sport that demands attention to detail and copious amounts of critical thinking crosses over nicely into tech. Outside of sports I my interests include movies, books, and podcasts. 
            </p> */}

            {/* <p>
              I passionately envision being part of a team that helps to create a revolutionary product and/or business. Although the idea has not been thought of yet, I can promise it is coming! If you would like to see examples of programs that I have created just take a scroll through the <strong>portfolio</strong> page!
            </p> */}
  
        {/* </div> */}
    </div>
)

export default Bio