import { FC } from "react";
import { useSelector } from "react-redux";
import { List } from "antd";
import { RootState } from "../../redux/store";
import ComponentTypeItem from "../ComponentGroupItem";

const ComponentGroupList: FC = () => {
  const componentTypes = Object.values(useSelector((state: RootState) => state.component));

  return (
    <List
      itemLayout="horizontal"
      dataSource={componentTypes}
      renderItem={componentType => (
        <ComponentTypeItem key={componentType.id} title={componentType.title} id={componentType.id} />
      )}
    />
  )
}

export default ComponentGroupList;