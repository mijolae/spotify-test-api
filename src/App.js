import React from 'react';
// import Sharer from './Share';
import './App.css';

function App() {
  const tryShare = async () => {
    const blob = await fetch(
      'https://res.cloudinary.com/dgil8irq3/image/upload/v1670141954/babyseal_nojxae.jpg'
    ).then((r) => r.blob());
    const imgFile = new File([blob], 'seal.jpg', {
      type: blob.type,
    });
    console.log(blob.type);

    const shareData = {
      files: [imgFile],
    };

    navigator
      .share(shareData)
      .then(() => <p>Share Success</p>)
      .catch((e) => <p>Error: {e}</p>);
  };

  // fetch(
  //   'https://th-thumbnailer.cdn-si-edu.com/hMEJcNlfYQkWAY7UWinCN7Bob_0=/1072x720/filters:no_upscale()/https://tf-cmsv2-smithsonianmag-media.s3.amazonaws.com/filer/Surprising-Science-baby-seal-631.jpg'
  // )
  //   .then(function (response) {
  //     return response.blob();
  //   })
  //   .then(function (blob) {
  //     var file = new File([blob], 'picture.jpg', { type: 'image/jpeg' });
  //     var filesArray = [file];

  //     if (navigator.canShare && navigator.canShare({ files: filesArray })) {
  //       navigator.share({
  //         text: 'some_text',
  //         files: filesArray,
  //         title: 'some_title',
  //         url: 'some_url',
  //       });
  //     }
  //   });

  return (
    <div className='App'>
      {/* <Sharer label="Share" /> */}
      <button onClick={tryShare}>Share</button>
    </div>
  );
}

export default App;
