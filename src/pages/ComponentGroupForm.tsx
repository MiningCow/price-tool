import { FC, useState, useEffect, useCallback } from "react";
import { useParams, Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Row, Col, Button } from "antd";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux"
import { v4 as uuidv4 } from 'uuid';
import { RootState } from "../redux/store";
import { updateComponentGroupTitle } from "../redux/componentsSlice";
import ComponentList from "../components/ComponentList";

const ComponentGroupForm: FC = () => {
  const dispatch = useDispatch();
  const { componentGroupId } = useParams();
  const [componentGroupTitle, setComponentGroupTitle] = useState("");
  const componentGroups = useSelector((state: RootState) => state.component);
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors }
  } = useForm({
    defaultValues: { title: "test" } 
  });

  useEffect(() => {
    if (componentGroupId && componentGroupId !== "new-component-group") {
      const { title } = componentGroups[componentGroupId];
      setValue("title", title);
    }
  }, [componentGroupId]); 

  const onSubmit = handleSubmit(({ title }) => {
      if (!componentGroupId) return;

      let newComponentGroupId;

      if (componentGroupId === "new-component-group") {
        newComponentGroupId = uuidv4();
      } else if (componentGroups[componentGroupId]) {
        newComponentGroupId = componentGroupId;
      } else console.log("Couldn't find todo with id " + componentGroupId);
      if (newComponentGroupId) dispatch(updateComponentGroupTitle({ title: title, id: newComponentGroupId }));
    }
  );

  return (
    <Row style={{ width: 600, margin: "auto" }}>
      <Col span={16} offset={8}>
        <h1>Component group id: {componentGroupId}</h1>
        <form onSubmit={onSubmit}>
          <input {...register("title", { required: "Title is required" })} placeholder="title" />
          <p>{errors.title?.message}</p>
          <button>Rename</button>
        </form>
        {componentGroupId && <ComponentList components={Object.values(componentGroups[componentGroupId].components)} />}
      </Col>
      <Button type="dashed"><Link to="new-component">New component</Link></Button>
    </Row>
  )
}

export default ComponentGroupForm;