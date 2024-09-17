import { BaseTextFieldProps, TextField, unsupportedProp } from '@mui/material';
import { ChangeEvent, FC, useState } from 'react';

interface NumericInputProps extends BaseTextFieldProps {
  suffix?: string;
}

const NumericInput: FC<NumericInputProps> = ({ suffix, ...rest }) => {
  const [localValue, setLocalValue] = useState('');
  const OnChangeHandler = (
    event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    const { value } = event.target;
    console.log(value);

    const numberRegex = /^[0-9]*$/;
    if (suffix) {
      const hasSuffix = value.includes(suffix);
      const unSuffixedValue = hasSuffix ? value.replace(suffix, '') : value;
      if (numberRegex.test(unSuffixedValue)) {
        setLocalValue(unSuffixedValue);
        event.preventDefault();
        return;
      }
    }

    const isValid = numberRegex.test(value);
    if (isValid) {
      setLocalValue(value);
      return;
    }
    event.preventDefault();
  };

  const suffixedValue = suffix ? localValue.concat(suffix) : localValue;
  const valueToShow = localValue !== '' ? suffixedValue : localValue;
  return (
    <TextField
      inputProps={{ inputMode: 'numeric' }}
      value={valueToShow}
      onChange={OnChangeHandler}
      {...rest}
    />
  );
};

export default NumericInput;
