import React, { useState, useRef } from 'react';
import { Navigate } from 'react-router-dom';
import classes from './Form.module.css';

const Form = (props) => {
  const [checkedAmbassador, setCheckedAmbassador] = useState(false);
  const [sendOhmLink, setSendOhmLink] = useState(false);
  const [user, setUser] = useState(null);

  const nameRef = useRef('');
  const cityRef = useRef('');

  const userAmbassadorHandler = () => {
    setCheckedAmbassador((prevState) => !prevState);
  };

  const sendUserOhmLinkHandler = () => {
    setSendOhmLink((prevState) => !prevState);
  };

  const checkInputValid = (input) => {
    if (input.trim().length === 0 || !isNaN(+input) || input.match(/\d/)) {
      alert('The input is not valid.');
      return false;
    } else {
      console.log(input);
      return true;
    }
  };

  function submitHandler(event) {
    // TO-DO: navigate to Loading page or Analysis
    // TO-DO: incoming prop needs to be added to the parent
    event.preventDefault();

    if (
      checkInputValid(nameRef.current.value) &&
      checkInputValid(cityRef.current.value)
    ) {
      const user = {
        name: nameRef.current.value,
        city: cityRef.current.value,
        interestedInAmbassador: checkedAmbassador,
        sendOhmLink: sendOhmLink,
      };

      console.log(user);
      setUser(user);
    }
  }

  return (
    <div className={classes.form_body}>
      <div className={classes.form_div}>
        <div className={classes.almost_there}>
          Almost there! Just need a few more things.
        </div>
        <br />
        <section>
          <form id={classes.container} onSubmit={submitHandler}>
            <div className={classes.form_group}>
              <input
                type='text'
                id='userName'
                className={classes.form_control}
                name='userName'
                ref={nameRef}
                placeholder='What is your name?'
              />
              <label htmlFor='userName' id={classes.form_label}>
                What's your name?
              </label>
              <br />
            </div>
            <div className={classes.form_group}>
              <input
                type='text'
                id='userCity'
                name='userCity'
                className={classes.form_control}
                ref={cityRef}
                placeholder='What city are you in?'
              />
              <label htmlFor='userCity' id={classes.form_label}>
                What city are you in?
              </label>
            </div>
          </form>
        </section>
        <div className={classes.ohm_is}>
          Ohm is a brand new way to explore your favorite events and meet new
          friends.
        </div>
        <br />
        <section className={classes.ohm_checkbox}>
          <div>
            <input
              type='checkbox'
              id='userAmbassador'
              name='userAmbassador'
              className={classes.checkbox}
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
              className={classes.checkbox}
            />
            <label htmlFor='userOhmApp'>Send me a link to the app!</label>
          </div>
        </section>
        <br />

        <div className={classes.wishlist_button}>
          <button onClick={submitHandler}>Get my Wishlist</button>
        </div>
      </div>
      {user && <Navigate to='/results' state={{ user: user }} />}
    </div>
  );
};

export default Form;
