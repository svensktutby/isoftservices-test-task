import { ChangeEvent } from 'react';
import { makeAutoObservable } from 'mobx';
import { validate } from '../utils/validator';

interface IField {
  value: string;
  error: string;
}

type FieldType = 'firstName' | 'lastName';
type FieldsType = Record<FieldType, IField>;

interface IFormStore {
  fields: FieldsType;

  changeHandler: (event: ChangeEvent<HTMLInputElement>) => void;
  validateForm: () => void;
  reset: () => void;
}

class FormStore implements IFormStore {
  fields: FieldsType = {
    firstName: {
      value: '',
      error: '',
    },
    lastName: {
      value: '',
      error: '',
    },
  };

  constructor() {
    makeAutoObservable(this);
  }

  changeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    const eventName = name as FieldType;

    this.fields[eventName].value = value;
    this.fields[eventName].error = validate(this.fields[eventName].value);
  };

  validateForm = () => {
    const { firstName, lastName } = this.fields;

    firstName.error = validate(firstName.value);
    lastName.error = validate(lastName.value);

    return !(firstName.error || lastName.error);
  };

  reset = () => {
    this.fields.firstName.value = '';
    this.fields.lastName.value = '';

    this.fields.firstName.error = '';
    this.fields.lastName.error = '';
  };
}

export const formStore = new FormStore();
