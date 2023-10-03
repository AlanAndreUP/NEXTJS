import React from 'react';

const VideoGrid = () => {
  return (
    <div className="video-grid">
      <div className="video-container">
        <div className="video">
          <video src="../assets/vid1.mp4" autoPlay loop muted></video>
        </div>
        <div className="profile-icon"></div>
        <p className="username">Nombre de Usuario 1</p>
        <button className="follow-button">Follow</button>
      </div>
      <div className="video-container">
        <div className="video">
          <video src="../assets/vid2.mp4" autoPlay loop muted></video>
        </div>
        <div className="profile-icon"></div>
        <p className="username">Nombre de Usuario 2</p>
        <button className="follow-button">Follow</button>
      </div>
      <div className="video-container">
        <div className="video">
          <video src="../assets/vid3.mp4" autoPlay loop muted></video>
        </div>
        <div className="profile-icon"></div>
        <p className="username">Nombre de Usuario 3</p>
        <button className="follow-button">Follow</button>
      </div>
    </div>
  );
};

export default VideoGrid;
