import React, { FC } from 'react';
import { observer } from 'mobx-react-lite';

import s from './Form.module.scss';
import { formStore } from '../../store/store';
import { InputText } from '../common/InputText';
import { Button } from '../common/Button';

export const Form: FC = observer(() => {
  const {
    changeHandler,
    submitHandler,
    fields: { firstName, lastName },
    isValid,
  } = formStore;

  return (
    <div className={s.form}>
      <form onSubmit={submitHandler} noValidate>
        <InputText
          placeholder="Ваше имя"
          name="firstName"
          onChange={changeHandler}
          value={firstName.value}
          error={firstName.error}
          required
        />
        <InputText
          placeholder="Ваша фамилия"
          name="lastName"
          onChange={changeHandler}
          value={lastName.value}
          error={lastName.error}
          required
        />

        <Button>Готово</Button>
      </form>
    </div>
  );
});
