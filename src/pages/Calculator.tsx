import { FC, useCallback, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { Button, Card } from "antd";
import styled from "styled-components";
import { useSelector } from "react-redux"
import { RootState } from "../redux/store";
import ComponentType from "../types/ComponentType";
import ComponentGroupType from "../types/ComponentGroupType";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`
const StyledSelect = styled.select`
  width: 400px;
`
const StyledLabel = styled.label`
  font-size: 24px;
`

const FormItem = styled.div`
  display: flex;
  flex-direction: column;
`

const Price = styled.h2`
  margin: 0;
`

const CalculateButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 14px 0px;
`

const Calculator: FC = () => {
  const navigate = useNavigate();
  const componentGroups = useSelector((state: RootState) => state.component);
  const {
    register,
    handleSubmit,
    // setValue
  } = useForm();
  const [priceTotal, setPriceTotal] = useState(0);
  const newComponentGroups = Object.values(componentGroups);

  const onSubmit = handleSubmit((data) => {
    const priceTotal = Object.values(data).reduce((a, b) => Number(a) + Number(b)); 
    setPriceTotal(priceTotal);
  });

  const renderComponentOptions = useCallback(({ title, price, id }: ComponentType) => <option value={price}>{title} ${price}</option>
  , []);

  const renderComponents = useCallback(({ title, components, id }: ComponentGroupType) => {
    const newComponents = Object.values(components);

    return (
      <FormItem>
        <StyledLabel>{title}</StyledLabel>
        <StyledSelect {...register(title)}>
          {newComponents.map(renderComponentOptions)}
        </StyledSelect>
      </FormItem>
    );
  }, []);

  return (
    <>
      <Button type="primary" onClick={() => navigate("/component-groups")}>Edit</Button>
      <Container>
        <h1>Calculator</h1>
        <form onSubmit={onSubmit}>
          {newComponentGroups.map(renderComponents)}
          <CalculateButton>
            <button>Calculate</button>
          </CalculateButton>
        </form>
        {priceTotal && <Price>Total: ${priceTotal}</Price>}
      </Container>
    </>
    
  );
}

export default Calculator;