import React from 'react';

import html2canvas from 'html2canvas';
import imageSpotify from '../assets/spotifyChristmasResult.jpg';
import classes from './ImageToShare.module.css';
import { useLocation } from 'react-router-dom';

const ImageToShare = (props) => {
  let canShare = navigator.share;
  const { state } = useLocation();

  console.log(state);
  const handleDownloadImage = async () => {
    const element = document.getElementById('print'),
      canvas = await html2canvas(element),
      data = canvas.toDataURL('image/png'),
      link = document.createElement('a');
    console.log(data);
    link.href = data;
    link.download = 'ohmAnalysis.png';

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const tryShare = async () => {
    const element = document.getElementById('print');
    const canvas = await html2canvas(element);
    const data = canvas.toDataURL('image/png');
    const blob = await fetch(data).then((r) => r.blob());
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
    <div className={classes.initialDiv}>
      <div className={classes.toPrint} id='print'>
        <span className={classes.backgroundImage}>
          <img src={imageSpotify} alt='christmas and ohm' />
        </span>
        <div className={classes.responses}>
          <div className={classes.wishlistTitle}>
            <text>{state.user.name}'s wishlist:</text>
          </div>
          <div className={classes.item}>
            <text>1. Backstage passes to see Che Ecru perform.</text>
          </div>
          <div className={classes.item}>
            <text>2. A new job, with FKJ as {state.user.name}'s manager.</text>
          </div>
          <div className={classes.item}>
            <text>3. A hug - it's been that kind of year.</text>
          </div>
        </div>
      </div>
      <div className={classes.downloadButton}>
        <button type='button' onClick={handleDownloadImage}>
          Download
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
