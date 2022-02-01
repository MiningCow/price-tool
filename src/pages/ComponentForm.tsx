import { useEffect, FC } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { v4 as uuidv4 } from 'uuid';
import { useSelector, useDispatch } from "react-redux"
import { RootState } from "../redux/store";
import { updateComponents } from "../redux/componentsSlice";
// import styled from "styled-components";

interface FormData {
  title: string,
  price: number,
  url?: string
}

const ComponentForm: FC = () => {
  const navigate = useNavigate();
  const { componentGroupId, componentId } = useParams();
  const dispatch = useDispatch();
  const componentGroups = useSelector((state: RootState) => state.component);
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors }
  } = useForm<FormData>({
    defaultValues: {
      title: "",
      price: 0,
      url: ""
    }
  });

  useEffect(() => {
    if (!componentGroupId || !componentId) {
      navigate("/component-groups");
      return
    }

    const currentComponentGroup = componentGroups[componentGroupId];

    if (!currentComponentGroup) {
      navigate("/component-groups");
      return
    }

    const currentComponents = currentComponentGroup.components[componentId];

    if (componentId !== "new-component" && !currentComponents) {
      navigate(`/component-groups/${componentGroupId}`);
      return
    }

    if (componentId !== "new-component") {
      const { title, price, url } = currentComponents;
      setValue("title", title);
      setValue("price", price);
      setValue("url", url);
      console.log({ title, price, url });
    }
  }, [componentGroupId, componentId]);

  const onSubmit = handleSubmit(({ title, price, url }) => {
    if (!componentGroupId || !componentId) return;

    let newId;

    if (componentId === "new-component") {
      newId = uuidv4();
    } else newId = componentId;

    dispatch(updateComponents({ componentGroupId, component: { title, price, url, id: newId }}));
    navigate(`/component-groups/${componentGroupId}`);
  });

  return (
    <form onSubmit={onSubmit}>
      <input {...register("title", { required: "Title is required" })} placeholder="title" />
      <p>{errors.title?.message}</p>
      <input type="number" {...register("price", { required: "Price is required" })} placeholder="price" />
      <p>{errors.price?.message}</p>
      <input {...register("url")} placeholder="url" />
      <input type="submit" />
    </form>
  );
}

export default ComponentForm;
