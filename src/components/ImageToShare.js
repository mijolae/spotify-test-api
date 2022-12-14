import React, { useEffect, useRef } from 'react';
import html2canvas from 'html2canvas';

import './ImageToShare.css';

const ImageToShare = (props) => {
  const interestedInAmbassador = props.user.interestedInAmbassador.toString();
  const sendOhmLink = props.user.sendOhmLink.toString();
  let canShare = navigator.share;
  let dataURI = useRef();

  useEffect(() => {
    async function createImage() {
      const element = document.getElementById('print'),
        canvas = await html2canvas(element),
        data = canvas.toDataURL('image/jpg');

      dataURI.current = data;
    }
    createImage();
  }, []);

  const handleDownloadImage = async () => {
    const element = document.getElementById('print'),
      canvas = await html2canvas(element),
      data = canvas.toDataURL('image/jpg'),
      link = document.createElement('a');
    link.href = data;
    link.download = 'ohmAnalysis.jpg';

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const tryShare = async () => {
    const blob = await fetch(dataURI.current).then((r) => r.blob());
    const imgFile = new File([blob], 'ohmAnalysis.jpg', {
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

  return (
    <div className='share-page'>
      <div class='print'>
        <h1 class='header'>{props.user.name}'s wishlist:</h1>
        <p class='response'>1. Backstage passes to see Che Ecru perform.</p>
        <p class='response'>
          2. A new job, with FKJ as {props.user.name}'s manager.
        </p>
        <p class='response'>3. A hug - it's been that kind of year.</p>
      </div>
      <div class='buttons'>
        <button>Download</button>
        <button>Share</button>

        <button type='button' onClick={handleDownloadImage}>
          Download Info
        </button>
        {canShare && (
          <button type='button' onClick={tryShare}>
            Share Results
          </button>
        )}
      </div>
    </div>
  );
};

export default ImageToShare;
