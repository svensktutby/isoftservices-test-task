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
  isValid: boolean;

  changeHandler: (event: ChangeEvent<HTMLInputElement>) => void;
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

  isValid = true;

  constructor() {
    makeAutoObservable(this);
  }

  private validateForm() {
    const { firstName, lastName } = this.fields;

    this.isValid = !(firstName.error || lastName.error);
  }

  changeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    const eventName = name as FieldType;

    this.fields[eventName].value = value;
    this.fields[eventName].error = validate(this.fields[eventName].value);

    this.validateForm();
  };

  submitHandler = () => {
    const { firstName, lastName } = this.fields;

    firstName.error = validate(firstName.value);
    lastName.error = validate(lastName.value);

    this.validateForm();

    console.log(firstName.value);
    console.log(lastName.value);
  };

  reset = () => {
    this.fields.firstName.value = '';
    this.fields.lastName.value = '';
  };
}

export const formStore = new FormStore();
