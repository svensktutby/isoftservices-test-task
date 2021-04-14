import React, { FC, FormEvent, useState } from 'react';
import { observer } from 'mobx-react-lite';

import s from './Form.module.scss';
import { formStore } from '../../store/store';
import { InputText } from '../common/InputText';
import { Button } from '../common/Button';
import { Overlay } from '../common/Overlay';
import { Message } from '../common/Message';

export const Form: FC = observer(() => {
  const [modal, setModal] = useState(false);

  const {
    fields: { firstName, lastName },
    changeHandler,
    validateForm,
    reset,
  } = formStore;

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const isValid = validateForm();
    isValid && setModal(true);
  };

  const closeModalHandler = () => {
    setModal(false);
    reset();
  };

  return (
    <div>
      <form className={s.form} onSubmit={onSubmit} noValidate>
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

        <Button type="submit">Готово</Button>
      </form>

      {modal && (
        <div>
          <Overlay closeHandler={closeModalHandler} />
          <div className={s.messageWrapper}>
            <Message className={s.message} clickHandler={closeModalHandler}>
              Здравствуйте,&nbsp;
              <span>{`${firstName.value} ${lastName.value}`}</span>
            </Message>
          </div>
        </div>
      )}
    </div>
  );
});
