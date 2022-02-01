import { FC } from "react";
import { Card } from "antd";
import componentGroups from "../mock/InitialComponentGroups";
import styled from "styled-components";
import ComponentGroupList from "../components/ComponentGroupList";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const initialComponentTypes = Object.values(componentGroups).reduce((acc: Array<string>, { title }) => {
  acc.push(title);
  return acc;
}, []);

// const initialComponentTypes = Object.values(componentTypes);

const ComponentGroupsPage: FC = () => {

  return (
    <Container>
      <Card title={<h2 style={{ margin: 0 }}>Component Types</h2>}>
        <ComponentGroupList />
      </Card>
    </Container>
  );
}

export default ComponentGroupsPage;
