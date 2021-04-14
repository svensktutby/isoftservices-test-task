import React, { ButtonHTMLAttributes, DetailedHTMLProps, FC } from 'react';

import s from './Button.module.scss';

type DefaultButtonPropsType = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

type PropsType = DefaultButtonPropsType & {
  error?: boolean;
  large?: boolean;
  small?: boolean;
};

export const Button: FC<PropsType> = ({
  error,
  large,
  small,
  className,
  ...restProps
}) => {
  const finalClassName = `${s.btn} ${large ? s.large : ''} ${
    small ? s.small : ''
  } ${error ? s.error : s.default} ${className ? className : ''}`;

  return <button className={finalClassName} {...restProps} />;
};
