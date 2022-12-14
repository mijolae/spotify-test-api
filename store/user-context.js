import React from 'react';

const UserContext = React.createContext({
  name: '',
  city: '',
  interestedAmbassador: false,
  sendLinkAfter: false,
  addUser: (user) => {},
});

export default UserContext;
