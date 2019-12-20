import React from 'react';
import './index.css';

interface Props {
  active: boolean,
  onClick: () => void,
  text: string
}

const Link: React.FC<Props> = ({ active, onClick, text }) => (
  <p
    className={`Link ${active ? 'active' : ''}`}
    onClick={onClick}
  >
    {text} {active}
  </p>
);

export default Link;
