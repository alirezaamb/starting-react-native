import AppTextInput from '../AppTextInput';
import ErrorMessage from './ErrorMessage';
import { useFormikContext } from 'formik';

function AppFormField({ name, ...rest }) {
  const { setFieldTouched, handleChange, errors, touched } = useFormikContext();
  return (
    <>
      <AppTextInput
        onChangeText={handleChange(name)}
        onBlur={() => setFieldTouched(name)}
        {...rest}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
}

export default AppFormField;
