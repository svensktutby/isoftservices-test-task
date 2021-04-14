import React, { FC } from 'react';

import s from './Message.module.scss';
import { Button } from '../Button';

type PropsType = {
  className?: string;
  clickHandler?: () => void;
  btnText?: string;
};

export const Message: FC<PropsType> = ({
  children,
  className,
  clickHandler,
  btnText = 'Close',
}) => {
  const messageClassName = `${s.message} ${className ? className : ''}`;

  return (
    <div className={messageClassName}>
      <p>{children}</p>
      {clickHandler && (
        <Button small error onClick={clickHandler}>
          {btnText}
        </Button>
      )}
    </div>
  );
};
