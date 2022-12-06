import React from 'react';
// import Sharer from './Share';
import './App.css';
import MainPage from './components/MainPage';

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

  return (
    <div className='App'>
      <MainPage />
      <button onClick={tryShare}>Share</button>
    </div>
  );
}

export default App;
