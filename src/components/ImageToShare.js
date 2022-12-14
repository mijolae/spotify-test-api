import React, { useEffect, useRef, useState } from 'react';

import html2canvas from 'html2canvas';

import './ImageToShare.css';
import { getDownloadURL, ref } from 'firebase/storage';
import storage from '../config/firebase';

const ImageToShare = (props) => {
  const [backgroundImage, setBackgroundImage] = useState();
  const [testUrl, setTestUrl] = useState();
  const interestedInAmbassador = props.user.interestedInAmbassador.toString();
  const sendOhmLink = props.user.sendOhmLink.toString();
  let canShare = navigator.share;
  let dataURI = useRef();

  useEffect(() => {
    getDownloadURL(ref(storage, 'spotifyChristmasResult.jpg')).then((url) => {
      setBackgroundImage(url);
    });
  }, []);

  async function createImage() {
    const element = document.getElementById('print'),
      canvas = await html2canvas(element),
      data = canvas.toDataURL('image/jpg');

    dataURI.current = data;
  }

  const handleDownloadImage = async () => {
    const element = document.getElementById('print'),
      canvas = await html2canvas(element),
      data = canvas.toDataURL('image/jpg'),
      link = document.createElement('a');
    console.log(data);
    link.href = data;
    link.download = 'ohmAnalysis.';

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const tryShare = async () => {
    createImage();
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
    <div className='image-body'>
      <div className='share-page'>
        <div id='print'>
          <section className='article' media='(min-width: 460px)'>
            <picture className='picture '>
              <source srcSet={backgroundImage} />
              <img src={backgroundImage} alt='background' />
            </picture>
            <h1 class='header'>
              {props.user.name}'s wishlist:
              <p class='response-1'>
                1. Backstage passes to see Che Ecru perform.
              </p>
              <p class='response-2'>
                2. A new job, with FKJ as {props.user.name}'s manager.
              </p>
              <p class='response-3'>3. A hug - it's been that kind of year.</p>
            </h1>
          </section>
        </div>

        <div class='buttons'>
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
    </div>
  );
};

export default ImageToShare;
