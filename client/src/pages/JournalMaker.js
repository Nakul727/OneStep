import React from 'react';
import { Header, Footer, LoginButton } from '../components/index.js';
import { JournalHelper } from '../components/index.js';
import useUser from '../hooks/useUser';

const JournalMaker = (props) => {
  const user = useUser();

  return (
    <div>
      <Header />

      <div>
        <p>Journal Maker</p>
        {user ? <JournalHelper /> : <LoginButton />}
      </div>

      <Footer />
    </div>
  );
};

export default JournalMaker;
