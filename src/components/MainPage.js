import React, { useEffect, useState } from 'react';
import Form from './Form';
import ImageToShare from './ImageToShare';
const MainPage = () => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState();

  useEffect(() => {
    console.log('user updated');
  }, [user]);

  const onSubmitUser = (user) => {
    console.log('this is user: ', user);
    setUser(user);
  };

  return (
    <div
      style={{
        border: '4px solid #000000',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {!user && <Form onSubmitUser={onSubmitUser} />}
      {user && <ImageToShare user={user} />}
    </div>
  );
};

export default MainPage;
