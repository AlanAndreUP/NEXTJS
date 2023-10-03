// components/VideoContainer.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faCommentDots, faBookmark, faShare } from '@fortawesome/free-solid-svg-icons';

function VideoContainer() {

  return (
    <div className="right" id="video-container">
    <div className="post">
      <div className="post-info">
        <div className="user">
          <img src="../assets/Gypsy.png" alt="avatar" />
          <div>
            <h6>Profe Daniel</h6>
            <p>Cool Video</p>
          </div>
        </div>
        <button>Follow</button>
      </div>
      <div className="post-content">
        <video muted loop controls disablePictureInPicture controlsList="nodownload noplaybackrate">
          <source src="../assets/vid1.mp4" type="video/mp4" />
        </video>
        <div className="video-icons">
          <a href="#">
            <i>
              <FontAwesomeIcon icon={faHeart} style={{ width: '35px'}} />
            </i>
            <span>1.6K</span>
          </a>
          <a href="#">
            <i>
              <FontAwesomeIcon icon={faCommentDots} style={{ width: '30px'}} />
            </i>
            <span>423</span>
          </a>
          <a href="#">
            <i>
              <FontAwesomeIcon icon={faBookmark}style={{ width: '21px'}} />
            </i>
            <span>873</span>
          </a>
          <a href="#">
            <i>
              <FontAwesomeIcon icon={faShare} style={{ width: '35px'}} />
            </i>
            <span>150</span>
          </a>
        </div>
      </div>
    </div>

      <div className="post">
        <div className="post-info">
          <div className="user">
            <img src="../assets/Frankenstein.png" alt="avatar" />
            <div>
              <h6>Profe Diana</h6>
              <p>El verdadero estoy cansado jefe 😮 #viral #fypシ #foryou</p>
            </div>
          </div>
          <button>Follow</button>
        </div>
        <div className="post-content">
          <video controls muted loop disablePictureInPicture controlsList="nodownload noplaybackrate">
            <source src="../assets/vid2.mp4" type="video/mp4" />
          </video>
          <div className="video-icons">
          <a href="#">
            <i>
              <FontAwesomeIcon icon={faHeart} style={{ width: '35px'}} />
            </i>
            <span>1.6K</span>
          </a>
          <a href="#">
            <i>
              <FontAwesomeIcon icon={faCommentDots} style={{ width: '30px'}} />
            </i>
            <span>423</span>
          </a>
          <a href="#">
            <i>
              <FontAwesomeIcon icon={faBookmark}style={{ width: '21px'}} />
            </i>
            <span>873</span>
          </a>
          <a href="#">
            <i>
              <FontAwesomeIcon icon={faShare} style={{ width: '35px'}} />
            </i>
            <span>150</span>
          </a>
        </div>
        </div>
      </div>

      <div className="post">
        <div className="post-info">
          <div className="user">
            <img src="../assets/Pirate.png" alt="avatar" />
            <div>
              <h6>Profe Noricumbo</h6>
              <p>El verdadero estoy cansado jefe 😮 #viral #fypシ #foryou</p>
            </div>
          </div>
          <button>Follow</button>
        </div>
        <div className="post-content">
          <video muted controls loop disablePictureInPicture controlsList="nodownload noplaybackrate">
            <source src="../assets/vid3.mp4" type="video/mp4" />
          </video>
          <div className="video-icons">
          <a href="#">
            <i>
              <FontAwesomeIcon icon={faHeart} style={{ width: '35px'}} />
            </i>
            <span>1.6K</span>
          </a>
          <a href="#">
            <i>
              <FontAwesomeIcon icon={faCommentDots} style={{ width: '30px'}} />
            </i>
            <span>423</span>
          </a>
          <a href="#">
            <i>
              <FontAwesomeIcon icon={faBookmark}style={{ width: '21px'}} />
            </i>
            <span>873</span>
          </a>
          <a href="#">
            <i>
              <FontAwesomeIcon icon={faShare} style={{ width: '35px'}} />
            </i>
            <span>150</span>
          </a>
        </div>
        </div>
      </div>
    </div>
  );
}

export default VideoContainer;
