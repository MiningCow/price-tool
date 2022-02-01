import { FC } from "react";
import { List } from "antd";
import ComponentItem from "../ComponentItem";
import ComponentType from "../../types/ComponentType";

interface Props {
  components: ComponentType[];
}

const ComponentList: FC<Props> = ({ components }) => {

  return (
    <List
      itemLayout="horizontal"
      dataSource={components}
      renderItem={component => (
        // <ComponentItem key={component.id} title={component.title} id={component.id} />
        <ComponentItem key={component.id} title={component.title} price={component.price} id={component.id} url={component.url} />
      )}
    />
  )
}

export default ComponentList;