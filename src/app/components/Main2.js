import React from 'react';
import Footer from './VideoCuadricula';import './estilosperrones.css';
import { faHome, faUserFriends, faVideo } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
function Main() {
  return (
    <main>
    <div className="left">
    <div className="btns">
  <a href="#">
    <FontAwesomeIcon icon={faHome} style={{ width: '30px', marginRight:'10px',marginTop:'10px'}} />
    <span>For You</span>
  </a>
  <a href="./Following.html">
    <FontAwesomeIcon icon={faUserFriends}  style={{ width: '30x', marginRight:'10px',marginTop:'10px'}}/>
    <span>Following</span>
  </a>
  <a href="#">
    <FontAwesomeIcon icon={faVideo} style={{ width: '30px', marginRight:'10px',marginTop:'10px'}} />
    <span>Live</span>
  </a>
</div>

        <div className="login">
            <p className="lettersLogin">Log in to follow creators, like videos, and view comments</p>
            <button>Log in</button>
        </div>
     
    
        <div className="links">
            <div>
                <div className="link">
              
                  <a href="#">Careers</a>
                  <a href="#">TikTok for Good</a>
                  <a href="#">Advertise</a>
                  <a href="#">Developers</a>
                  <a href="#">Transparency</a>
                  <a href="#">TikTok Rewards</a>
                  <a href="#">TikTok Embeds</a>
                  <a href="#">Help</a>
                  <a href="#">Safety</a>
                  <a href="#">Terms</a>
                  <a href="#">Privacy</a>
                  <a href="#">Creator Portal</a>
                  <a href="#">Community Guidelines</a>

                  <p className="botoness" >See More</p>
                  <div className="linkss">
                    <a href="#">About</a>
                    <a href="#">Newsroom</a>
                    <a href="#">Contact</a>
                    <a href="#">Careers</a>
                    <a href="#">ByteDance</a>
                    <a href="#">About</a>
                    <a href="#">Newsroom</a>
                    <a href="#">Contact</a>
                    <a href="#">Careers</a>
                    <a href="#">ByteDance</a>
                    <a href="#">Dance</a>
                    <a href="#">Arts</a>
                    <a href="#">Food and Drink</a>
                    <a href="#">Tourism</a>
                    <a href="#">Production and Manufacturing</a>
                    <a href="#">Vehicles and Transportation</a>
                    <a href="#">Relationship</a>
                    <a href="#">TikTok Style</a>
                    <a href="#">Athletics</a>
                    <a href="#">Hobbies</a>
                  </div>
                </div>
                <div className="copyright">
                    <h6>&copy; 2023 TikTok</h6>
                </div>
            </div>
        </div>
    </div>
   <Footer></Footer>
   
    </main>
  );
}

export default Main;
