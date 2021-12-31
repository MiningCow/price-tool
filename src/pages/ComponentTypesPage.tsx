import React, { FC } from "react";
import { useNavigate } from "react-router-dom";
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import { Select, Button, Form, Input } from "antd";
import componentTypes from "../mock/InitialComponentTypes";
import styled from "styled-components";

const { Option } = Select;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const initialComponentTypes = Object.values(componentTypes).reduce((acc: Array<string>, { title }) => {
  acc.push(title);
  return acc;
}, []);

// const initialComponentTypes = Object.values(componentTypes);
console.log(initialComponentTypes);

const ComponentTypesPage: FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <Button type="primary" onClick={() => navigate("/calculator")}>&lt; Calculator</Button>
      <Form initialValues={{ componentTypes: initialComponentTypes }}>
        <Form.List name="componentTypes">
          {(componentTypes, { add, remove }) => (
            <>
              <div>
                {componentTypes.map(field => (
                  <Form.Item {...field}>
                    <Input />
                  </Form.Item>
                ))}
              </div>
              <Form.Item>
                <Button
                  type="dashed"
                  onClick={() => add()}
                  icon={<PlusOutlined />}
                >
                  Add component type
                </Button>
              </Form.Item>
            </>
          )}
        </Form.List>
      </Form>
    </>
  );
}

export default ComponentTypesPage;


{/* <>
      <Button type="primary" onClick={() => navigate("/calculator")}>&lt; Calculator</Button>
      <Container>
        <div>
          <Row style={{ width: 600, margin: "auto" }}>
            <Col span={16} offset={8}>
              <h1>Component Types</h1>
            </Col>
          </Row>
          <Form
            style={{ width: 600, margin: "auto" }}
            {...formItemLayout}
            onFinish={onFinish}
            initialValues={initialValues}
          >
            <Form.Item name="priority" label="Priority" rules={[{ required: true, type: 'number', min: -20, max: 20, message: "Please set todo priority"}]}>
              <InputNumber />
            </Form.Item>
            <Form.Item name="title" label="Title" rules={[{ required: true }]}>
              <Input />
            </Form.Item>
            <Form.Item wrapperCol={{span: 16, offset: 8}}>
              <Button type="primary" htmlType="submit">Submit</Button>
            </Form.Item>
          </Form>
        </div>
      </Container>
    </> */}