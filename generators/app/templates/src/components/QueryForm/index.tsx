import { FC, useEffect } from 'react';
import { Form, Select, DatePicker, Input, Radio } from 'antd';
import { QueryFormProps, QueryFormItem, OptionItem } from './types';

const { RangePicker } = DatePicker;

const renderFormItem = (data:QueryFormItem) => {
  let result;
  switch(data.type) {
    case 'select':
      result = (
        <Select allowClear style={{width: 160, marginBottom: 16, ...data.style}} placeholder={`全部${data.label}`}>
          {
            data.options ?
            data.options.map(
              (option:OptionItem) => <Select.Option key={option.value} value={option.value}>{option.name}</Select.Option>
            ): ''
          }
        </Select>
      );
      break;
    case 'time-range':
      result = <RangePicker style={{ marginBottom: 16, ...data.style}} showTime />;
      break;
      case 'radio-button':
        result = <Radio.Group
          style={{ marginBottom: 16, ...data.style}}
          options={data.options?.map(i => ({label: i.name, value: i.value}))}
          optionType="button"
          buttonStyle="solid"
        />;
        break;
    default:
      result = <Input />
  }
  return result;
};

const QueryForm:FC<QueryFormProps> = (props) => {
  const initialValues = {};
  useEffect(() => {
    if (props.items) {
      let initV:any = {};
      props.items
        .forEach((item:QueryFormItem) => {
          if (Array.isArray(item.name)) {
            item.name.forEach((name:string) => {
              initV[name] = item.defaultValue;
            })
          } else {
            initV[item.name] = item.defaultValue;
          }
        })
    }
  }, [props.items])

  return (
    <div>
      <Form
        initialValues={initialValues}
        layout="inline"
        onValuesChange={(changedValues: any, values: any) =>  {
          if (props.onChange) {
            props.onChange(changedValues, values);
          }
        }}
      >
        {
          props.items ?
          props.items.map((formItem: QueryFormItem) => {
            return (
              <Form.Item
                key={formItem.name.toString()}
                name={formItem.name} label={formItem.showLabel ? formItem.label : undefined}
              >
                { renderFormItem(formItem) }
              </Form.Item>
            )
          }) : ''
        }
      </Form>
    </div>
  );
}

export default QueryForm;
