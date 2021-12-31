import { FC } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import Calculator from "./pages/Calculator";
import ComponentTypesPage from "./pages/ComponentTypesPage";

const App: FC = () => {
  return (
    <Router>
			<Routes>
				<Route path="/" element={<Navigate replace to="/calculator" />} />
				<Route path="/calculator" element={<Calculator/>} />
				<Route path="/edit" element={<ComponentTypesPage/>} />
			</Routes>
    </Router>
  );
}

export default App;
