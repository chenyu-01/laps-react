import React from 'react';
import { Button } from '../Authentification/Button';
import { AuthContext } from '../../context/AuthContext';

const Approval = (props) => {
  const handleButtonClick = () => {
    // handle button click event here
  };

  return (
    <form>
      <header className="header">Approved Applications</header>
      <Button onClick={handleButtonClick}>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/df235d09c9895bd4de9f837be29c30b935acc3a83ffcbdb904646741a8899ea0?apiKey=afcfb69cbe1345f7bd15a0a535fc2da7&"
          className="aspect-[0.88] object-contain object-center w-3.5 overflow-hidden shrink-0 max-w-full mt-2"
          alt="Approved Applications"
        />
      </Button>
    </form>
  );
};

export default Approval;
