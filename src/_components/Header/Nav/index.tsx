import React from 'react';
import './index.css';
import Link from '../Link';

interface Props {
  links: Array<string>,
  opened: number,
  setActive: (link: string) => void,
}

const Nav: React.FC<Props> = ({ links, opened , setActive}) => {
  return (
    <div className="Nav">
      {links.map((link, index) =>
        <Link text={link} active={index === opened} onClick={() => setActive(link)}/>
      )}
    </div>
  );
};

export default Nav;
