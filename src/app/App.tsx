import React from 'react';

import s from './App.module.scss'
import { Form } from '../components/Form/Form';

export const App = () => {

  return (
    <div className={s.app}>
      <div className={s.container}>
        <h1>Тестовое задание <span>ООО Айсофт Сервисез</span></h1>

        <Form/>
      </div>
    </div>
  );
};
