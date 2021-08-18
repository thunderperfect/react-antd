import React from 'react';
import { Form, Switch, Col, Input} from 'antd';
import MaskedInput from 'antd-mask-input';
import { useFormContext, Controller } from 'react-hook-form';
import InputMask from 'react-input-mask';
export default function AntPhone(props) {
  console.log('AntPhone props: ', props);

  const {
    control,
    watch,
    formState: { errors }
  } = useFormContext();

  const { name } = props;
  const isForeignName = `${name}IsForeign`;
  const watchIsForeign = watch(isForeignName);

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
            {...props}
            control={control}
            rules={{
              required: { value: true, message: `${props.name} is required` }
            }}
            render={({
              field: { onChange, value },
              fieldState: { invalid }
            }) => (
              <InputMask
                mask={watchIsForeign ? '+9999999999' : '(999) 999-9999'}
                value={value}
                title={props.name}
                onChange={e => {
                  e.target.value = e.target.value.replace(/\D/g, '');
                  return onChange(e);
                }}
              >
                {inputProps => (
                  <Input
                    {...inputProps}
                    invalid={invalid}
                    type="tel"
                    bsSize="sm"
                  />
                )}
              </InputMask>
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
      </Col>
    </>
  );
}
