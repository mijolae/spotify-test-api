import React, { useState, useRef } from 'react';
import classes from './Form.css';

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
    <div className='form-body'>
      <div className='form-div'>
        <div className='almost-there-just-need-a-few'>
          Almost there! Just need a few more things.
        </div>
        <br />
        <section>
          <form id='container' onSubmit={submitHandler}>
            <div id='form-group'>
              <input
                type='text'
                id='userName'
                className='form-control'
                name='userName'
                ref={nameRef}
                placeholder='What is your name?'
              />
              <label htmlFor='userName' id='form-label'>
                What's your name?
              </label>
              <br />
            </div>
            <div id='form-group'>
              <input
                type='text'
                id='userCity'
                name='userCity'
                className='form-control'
                ref={cityRef}
                placeholder='What city are you in?'
              />
              <label htmlFor='userCity' id='form-label'>
                What city are you in?
              </label>
            </div>
          </form>
        </section>
        <div className='ohm-is-a-brand-new-way-to-expl'>
          Ohm is a brand new way to explore your favorite events and meet new
          friends.
        </div>
        <br />
        <section className='ohm_checkbox'>
          <div>
            <input
              type='checkbox'
              id='userAmbassador'
              name='userAmbassador'
              className='checkbox'
            />
            <label htmlFor='userAmbassador'>
              I'm interested in getting paid to go to events!
            </label>
          </div>
          <div>
            <input
              type='checkbox'
              id='userOhmApp'
              name='userOhmApp'
              className='checkbox'
            />
            <label htmlFor='userOhmApp'>Send me a link to the app!</label>
          </div>
        </section>
        <br />

        <div className='wishlist_button'>
          <button onClick={submitHandler}>Get my Wishlist</button>
        </div>
      </div>
    </div>
  );
};

export default Form;
