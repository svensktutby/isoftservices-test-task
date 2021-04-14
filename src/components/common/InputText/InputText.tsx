import React, {
  ChangeEvent,
  DetailedHTMLProps,
  InputHTMLAttributes,
  KeyboardEvent,
  FC,
} from 'react';

import s from './InputText.module.scss';
import { SvgIcon } from '../SvgIcon';

type DefaultInputPropsType = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

type PropsType = DefaultInputPropsType & {
  type?: 'text' | 'email' | 'password';
  onChangeText?: (value: string) => void;
  onEnter?: () => void;
  error?: string;
  errorClassName?: string;
  text?: string;
};

export const InputText: FC<PropsType> = ({
  type = 'text',
  onChange,
  onChangeText,
  onKeyPress,
  onEnter,
  error,
  className,
  errorClassName,
  text,

  ...restProps
}) => {
  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    onChange && onChange(e);

    onChangeText && onChangeText(e.currentTarget.value);
  };
  const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
    onKeyPress && onKeyPress(e);

    e.key === 'Enter' && onEnter && onEnter();
  };

  const finalErrorClassName = `${s.errorMessage} ${
    errorClassName ? errorClassName : ''
  }`;
  const finalInputClassName = `${s.input} ${error ? s.error : ''} ${
    className ? className : ''
  }`;

  return (
    <div className={s.inputWrapper}>
      {error && <span className={finalErrorClassName}>{error}</span>}

      <label className={s.label}>
        <span className={s.text}>{text || `Enter your ${type}`}</span>

        <input
          type={type}
          onChange={onChangeHandler}
          onKeyPress={onKeyPressHandler}
          className={finalInputClassName}
          {...restProps}
        />

        <SvgIcon type={type} />
      </label>
    </div>
  );
};
