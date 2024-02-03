import React from 'react';
import { Header, Footer } from '../components/index.js';
import { JournalHelper } from '../components/index.js';

const JournalMaker = (props) => {
  return (
    <div>
      <Header />

      <div>      
        <p>Journal Maker</p>
        <JournalHelper />
      </div>
      
      <Footer />
    </div>
  );
};

export default JournalMaker;
