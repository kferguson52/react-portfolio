import React from 'react';

const curYear = new Date().getFullYear();

const Footer = () => (
  <footer>
    <div>Kyle Ferguson &copy; {curYear}</div>
  </footer>
);

export default Footer;