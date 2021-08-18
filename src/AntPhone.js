import React from 'react';
import { Form, Switch, Col } from 'antd';
import MaskedInput from 'antd-mask-input';
import { useFormContext, Controller } from 'react-hook-form';

export default function AntPhone(props) {
  console.log('AntPhone props: ', props);

  const {
    control,
    watch,
    getValues,
    setValue,
    formState: { errors }
  } = useFormContext();

  const { name } = props;
  const isForeignName = `${name}IsForeign`;

  const watchIsForeign = watch(isForeignName);

  const [isForeign, setIsForeign] = React.useState(getValues(isForeignName));
  console.log('OfficePhoneNumberIsForeign');
  console.log('isForeignName', isForeignName);
  console.log('isForeign', isForeign);

  return (
    <>
      <Col>
        <Form.Item
          label={props.label}
          validateStatus={errors && errors[props.name] ? 'error' : ''}
          help={errors[props.name]?.message}
          tooltip={props.required && `${props.label} is required`}
          required={props.required}
        >
          <Controller
            rules={{
              required: {
                value: props.required,
                message: `${props.label} is required`
              }
            }}
            placeholder={props.label}
            control={control}
            name={props.name}
            render={({ field }) => (
              <MaskedInput
                {...field}
                mask={watchIsForeign ? '+111111111111' : '(111) 111-1111'}
                size="20"
              />
            )}
          />
        </Form.Item>
      </Col>
      <Col>
        <Form.Item label={`${props.label} Is Foreign`}>
          <Controller
            control={control}
            name={isForeignName}
            render={({ field: { value, onChange } }) => (
              <Switch onChange={onChange} checked={value} />
            )}
          />
        </Form.Item>
        {watchIsForeign.toString()}
      </Col>
    </>
  );
}
