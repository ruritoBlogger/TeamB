import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const Footer = () => {
  return (
    <div>
      <div>
        <img src={`${window.location.origin}/images/sample.png`} />
      </div>
      <p>this is footer</p>
    </div>
  )
}

export default Footer;