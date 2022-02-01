import { FC, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { Select, Button } from "antd";
import styled from "styled-components";
import { useSelector } from "react-redux"
import { RootState } from "../redux/store";
import ComponentType from "../types/ComponentType";
import ComponentGroupType from "../types/ComponentGroupType";

const { Option } = Select;

const StyledSelect = styled(Select)`
  width: 400px
`

const Calculator: FC = () => {
  const navigate = useNavigate();
  const componentGroups = useSelector((state: RootState) => state.component);

  const newComponentGroups = Object.values(componentGroups);

  const renderComponentOptions = useCallback(({ title, price }: ComponentType) => <Option value={title}>{title} ${price}</Option>
  , []);

  const renderComponents = useCallback(({ title, components }: ComponentGroupType) => {
    const newComponents = Object.values(components);

    return (
      <>
        <h2>{title}</h2>
        <StyledSelect>
          {newComponents.map(renderComponentOptions)}
        </StyledSelect>
      </>
    );
  }, []);

  return (
    <>
      <h1>Calculator</h1>
      <Button type="primary" onClick={() => navigate("/component-groups")}>Edit</Button>
      {newComponentGroups.map(renderComponents)}
    </>
  );
}

export default Calculator;