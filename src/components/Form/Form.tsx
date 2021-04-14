import React, { FC, FormEvent } from 'react';
import s from './Form.module.scss';
import { InputText } from '../common/InputText';
import { Button } from '../common/Button';

export const Form: FC = () => {
  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('submitted');
  }

  return (
    <div className={s.form}>
      <form onSubmit={submitHandler} noValidate>
        <InputText placeholder="Имя"/>
        <InputText placeholder="Фамилия"/>

        <Button>Готово</Button>
      </form>
    </div>
  );
};
