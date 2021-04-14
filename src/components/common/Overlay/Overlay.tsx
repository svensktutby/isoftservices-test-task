import React, { FC } from 'react';

import s from './Overlay.module.scss';
import { useLockBodyScroll } from '../../../hooks/useLockBodyScroll';
import { useKeyPress } from '../../../hooks/useKeyPress';

type PropsType = {
  closeHandler: () => void;
};

export const Overlay: FC<PropsType> = ({ children, closeHandler }) => {
  useLockBodyScroll();
  useKeyPress('Escape', closeHandler);

  return (
    <div className={s.overlay} onClick={closeHandler}>
      {children}
    </div>
  );
};
