
export default (req, res) => {
  
    const videos = [
      {
        id: 1,
        title: 'Video 1',
        source: '../assets/vid1.mp4',
        user: 'Profe Daniel',
        likes: 1600,
        comments: 423,
        bookmarks: 873,
        shares: 150,
      },
 
    ];
  
  
    res.status(200).json(videos);
  };
  