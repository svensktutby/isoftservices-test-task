import { ChangeEvent, FormEvent } from 'react';
import { makeAutoObservable } from 'mobx';

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

  changeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    event.persist();

    const { name, value } = event.target;
    const eventName = name as FieldType;

    this.fields[eventName].value = value;
  };

  submitHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(this.fields.firstName.value);
    console.log(this.fields.lastName.value);
  };

  reset = () => {
    this.fields.firstName.value = '';
    this.fields.lastName.value = '';
  };
}

export const formStore = new FormStore();
