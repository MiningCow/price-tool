import { FC } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteComponent } from "../../redux/componentsSlice";
import { Button } from "antd";
import { List } from "antd";
import ComponentType from "../../types/ComponentType";

const ComponentItem: FC<ComponentType> = ({ id, title, price, url }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { componentGroupId } = useParams();

  if (!componentGroupId) return (
    <p>no component group id</p>
  );

  return (
    <List.Item
      actions={[
        <Button type="primary" onClick={() => navigate(id)}>Edit</Button>,
        <Button type="primary" danger onClick={() => dispatch(deleteComponent({ componentGroupId, componentId: id }))}>Delete</Button>
      ]}
    >
      {title}
      ${price}
      {url && <a target="_blank" href={url}> url</a>}
    </List.Item>
  )
}

export default ComponentItem;