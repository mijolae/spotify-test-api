import React, { useState, useRef } from 'react';
const Form = (props) => {
  const [checkedAmbassador, setCheckedAmbassador] = useState(false);
  const [sendOhmLink, setSendOhmLink] = useState(false);

  const nameRef = useRef('');
  const cityRef = useRef('');

  const userAmbassadorHandler = () => {
    setCheckedAmbassador((prevState) => !prevState);
  };

  const sendUserOhmLinkHandler = () => {
    setSendOhmLink((prevState) => !prevState);
  };

  function submitHandler(event) {
    // TO-DO: navigate to Loading page or Analysis
    // TO-DO: incoming prop needs to be added to the parent
    event.preventDefault();

    const user = {
      name: nameRef.current.value,
      city: cityRef.current.value,
      interestedInAmbassador: checkedAmbassador,
      sendOhmLink: sendOhmLink,
    };

    console.log(user);
    props.onSubmitUser(user);
  }

  return (
    <div>
      <section>
        <form onSubmit={submitHandler}>
          <br />
          <label>What's your name?</label>
          <input type='text' id='userName' ref={nameRef} />
          <br />
          <input type='text' id='userCity' ref={cityRef} />
          <label>What city are you in?</label>
          <br />
          <input
            type='checkbox'
            id='userAmbassador'
            name='userAmbassador'
            onChange={userAmbassadorHandler}
          />
          <label htmlFor='userAmbassador'>
            I'm interested in getting paid to go to events!
          </label>
          <br />
          <input
            type='checkbox'
            id='userOhmApp'
            name='userOhmApp'
            onChange={sendUserOhmLinkHandler}
          />
          <label htmlFor='userOhmApp'>Send me a link to the app!</label>
          <button>Get My Analysis</button>
        </form>
      </section>
    </div>
  );
};

export default Form;
