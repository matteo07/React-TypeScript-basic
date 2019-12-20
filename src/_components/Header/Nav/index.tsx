import React, {Fragment, memo, useEffect, useState} from 'react';
import './index.css';
import Link from '../Link';

interface Props {
  links: Array<string>,
  openedLink: string,
  setActive: (link: string) => void,
}

const Nav: React.FC<Props> = memo(({ links, openedLink , setActive}) => {
  const [opened, setOpened] = useState(false);

  useEffect(() => {
    setOpened(false);
  }, [openedLink]);

  const menuLinks = links.map(link => (
    <Link
      active={link === openedLink}
      text={link}
      onClick={() => setActive(link)}
    />)
  );

  return (
    <Fragment>
      <div className="Nav">
        {menuLinks}
        <Link
          active={false}
          isMenu
          onClick={() => setOpened(!opened)}
          text="menu"
        />
      </div>

      {opened && (
        <div id="popup" onClick={() => setOpened(false)}>
          <div onClick={e => e.stopPropagation()}>
            {menuLinks}
          </div>
        </div>
      )}
    </Fragment>
  );
});

export default Nav;
