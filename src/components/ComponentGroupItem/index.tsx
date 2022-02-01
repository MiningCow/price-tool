import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteComponentGroup } from "../../redux/componentsSlice";
import { Button } from "antd";
import { List } from "antd";

interface Props {
  id: string;
  title: string;
}

const ComponentGroupItem: FC<Props> = ({ id, title }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <List.Item
      actions={[
        <Button type="primary" onClick={() => navigate(id)}>Edit</Button>,
        <Button type="primary" danger onClick={() => dispatch(deleteComponentGroup(id))}>Delete</Button>
      ]}
    >
      {title}
    </List.Item>
  )
}

export default ComponentGroupItem;