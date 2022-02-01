import { FC } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import Calculator from "./pages/Calculator";
import ComponentGroupsPage from "./pages/ComponentGroupsPage";
import ComponentGroupForm from "./pages/ComponentGroupForm";
import ComponentForm from "./pages/ComponentForm";

const App: FC = () => {
  return (
    <Router>
			<Routes>
				<Route path="/" element={<Navigate replace to="/calculator" />} />
				<Route path="/calculator" element={<Calculator/>} />
				<Route path="/component-groups" element={<ComponentGroupsPage/>} />
				<Route path="/component-groups/:componentGroupId" element={<ComponentGroupForm/>} />
				<Route path="/component-groups/:componentGroupId/:componentId" element={<ComponentForm/>} />
			</Routes>
    </Router>
  );
}

export default App;
