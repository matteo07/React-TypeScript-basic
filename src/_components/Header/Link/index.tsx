import React, { memo } from 'react';
import './index.css';
import { addClassIf } from "../../../_utils/utils.tx";

interface Props {
  active: boolean,
  isMenu?: boolean,
  onClick: () => void,
  text: string
}

const Link: React.FC<Props> = memo(({ active, isMenu, onClick, text }) => (
  <p
    className={`Link
      ${addClassIf(active, 'active')}
      ${addClassIf(isMenu, 'menu')}`
    }
    onClick={onClick}
  >
    {text}
  </p>
));

export default Link;
