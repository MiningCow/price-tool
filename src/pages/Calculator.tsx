import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { Select, Button } from "antd";
import componentTypes from "../mock/InitialComponentTypes";

const { Option } = Select;

const Calculator: FC = () => {
  const navigate = useNavigate();

  const newComponentTypes = Object.values(componentTypes);

  return (
    <>
      <h1>Calculator</h1>
      <Button type="primary" onClick={() => navigate("/edit")}>Edit</Button>
      {newComponentTypes.map(({ title, components }) => {
        const newComponents = Object.values(components);
        return (
          <>
            <h2>{title}</h2>
            <Select style={{ width: 400 }}>
              {newComponents.map(({ title, price }) => {
                return (
                  <Option value={title}>{title} ${price}</Option>
                );
              })}
            </Select>
          </>
        );
      })}
    </>
  );
}

export default Calculator;