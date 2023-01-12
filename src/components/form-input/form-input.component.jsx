import {
  BaseLabel,
  LabelForFieldWithContent,
  FormGroup,
  Input,
} from './form-input.styles';

const LABEL_TYPES = {
  default: BaseLabel,
  small: LabelForFieldWithContent,
};

const getFormLabel = (inputOptions) => {
  return inputOptions.value.length ? LABEL_TYPES.small : LABEL_TYPES.default;
};

const FormInput = ({ label, inputOptions }) => {
  const FormLabel = getFormLabel(inputOptions);

  return (
    <FormGroup>
      <Input {...inputOptions} />
      {label && <FormLabel>{label}</FormLabel>}
    </FormGroup>
  );
};

export default FormInput;
