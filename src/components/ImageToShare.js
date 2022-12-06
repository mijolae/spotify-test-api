import React, { useEffect, useRef } from 'react';
import html2canvas from 'html2canvas';

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

  console.log('browser share? ', canShare);
  console.log('dataURI? ', dataURI);
  const handleDownloadImage = async () => {
    const element = document.getElementById('print'),
      canvas = await html2canvas(element),
      data = canvas.toDataURL('image/jpg'),
      link = document.createElement('a');
    link.href = data;
    link.download = 'downloaded-image.jpg';

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
    <div>
      <div id='print'>
        <section>
          <p>Your name: {props.user.name}</p>
          <p>Your city: {props.user.city}</p>
          <p>Interested in brand ambassador? {interestedInAmbassador}</p>
          <p>Want the Ohm Link? {sendOhmLink}</p>
        </section>
      </div>
      <button type='button' onClick={handleDownloadImage}>
        Download Info
      </button>
      {canShare && (
        <button type='button' onClick={tryShare}>
          Share Results
        </button>
      )}
    </div>
  );
};

export default ImageToShare;
