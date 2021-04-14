export const validate = (value: string): string => {
  const trimmedValue = value.trim();
  let error = '';

  if (typeof trimmedValue !== 'undefined' && trimmedValue === '') {
    error = 'Поле обязательно для заполнения';
  } else if (trimmedValue && trimmedValue.length < 2) {
    error = 'В поле должно быть 2 или более знаков';
  }

  return error;
};
