import React from "react"
import ReactPlayer from 'react-player'
import "../../css/Projects.css"
import GFitVideo from "../../css/videos/GouveiaFitness.mp4";
// import GFitMobileVideo from "../../css/videos/GouveiaFitnessMobile.mp4";
import ThursdayTherapyVideo from "../../css/videos/ThursdayTherapy.mp4";
// import SecretSupperClubVideo from "../../css/videos/SecretSupperClub.mp4";
import SportHabitsVideo from "../../css/videos/SportHabitsVideo.mp4";
import MagnessConsultingVideo from "../../css/videos/MagnessConsulting.mp4";

const Projects = () => (
    <div className="row projectsContainer" id="projects">
        <div className="col projectColumn">
            {/* Row 1 */}
            <div className="row projectsRow" id='projectsTopRow'>
                <div className="col-md-6">
                    <div className="projectsPlayerDiv player-wrapper icon4">
                        <ReactPlayer className='projectsPlayer' url={GFitVideo} muted playing loop/>
                        {/* <div className='mobileVideoDiv'>
                          <ReactPlayer className='projectsPlayerMobile react-player' width='100%' height='100%' url={GFitMobileVideo} muted playing loop/>
                        </div> */}
                        <a className="caption" href="https://gfitwefit.com/" target="_blank" rel="noopener noreferrer">Gouveia Fitness</a>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="projectsPlayerDiv icon3">
                        <ReactPlayer className='projectsPlayer' url={ThursdayTherapyVideo} muted playing loop/>
                        <a className="caption" href="https://www.thursday-therapy.com/" target="_blank" rel="noopener noreferrer">Thursday Therapy</a>
                    </div>
                </div>
            </div>
            {/* Row 2 */}
            <div className="row projectsRow" id='projectsBottomRow'>
                <div className="col-md-6">
                    <div className="projectsPlayerDiv icon2">
                        <ReactPlayer className='projectsPlayer' url={SportHabitsVideo} muted playing loop/>
                        <a className="caption" href="http://www.sporthabits.net/" target="_blank" rel="noopener noreferrer">SportHabits</a>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="projectsPlayerDiv icon1">
                        <ReactPlayer className='projectsPlayer' url={MagnessConsultingVideo} muted playing loop/>
                        <a className="caption" href="https://https://magnessconsulting.herokuapp.com/" target="_blank" rel="noopener noreferrer">Magness Consulting</a>
                    </div>
                </div>
            </div>
            {/* Row 3 */}
            <div className="row">
                <div className="col-md-3">
                    {/* Empty on purpose */}
                </div>
                {/* <div className="col-md-6">
                    <div className="icon1">
                        <a className="caption" href="https://frozen-hollows-87443.herokuapp.com/">EAT DA BURGER</a>
                    </div>
                </div> */}
                <div className="col-md-3">
                    {/* Empty on purpose */}
                </div>
            </div>
        </div>
    </div>
  
)

export default Projects