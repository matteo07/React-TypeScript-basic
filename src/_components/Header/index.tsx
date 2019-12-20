import React from 'react';
import './index.css';

interface Props {
  title?: string
}

const Header: React.FC<Props> = ({ title }) => {
  return (
    <div className="Header">
      <h2>Title</h2>
    </div>
  );
};

export default Header;
