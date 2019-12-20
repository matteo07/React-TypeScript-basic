import React from 'react';
import './index.css';
import Nav from '../Nav';

interface Props {
  links: Array<string>,
  opened: number,
  setActive: (link: string) => void,
  title?: string,
}


const Header: React.FC<Props> = ({ links, opened, setActive, title }) => {
  return (
    <div className="Header">
      <h2>{title}</h2>
      <Nav links={links} opened={opened} setActive={setActive} />
    </div>
  );
};

export default Header;
