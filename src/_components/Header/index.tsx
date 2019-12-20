import React, {memo} from 'react';
import './index.css';
import Nav from './Nav';

interface Props {
  links: Array<string>,
  openedLink: string,
  setActive: (link: string) => void,
  title?: string,
}

const Header: React.FC<Props> = memo(({ links, openedLink, setActive, title }) => {
  return (
    <div className="Header">
      <h1>{title}</h1>
      <Nav links={links} openedLink={openedLink} setActive={setActive} />
    </div>
  );
});

export default Header;
