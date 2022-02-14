import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from "react-router-dom";

// the Elements
import App from "./App";
import Expenses from "./routes/expenses";
import Invoices from "./routes/invoices";
import Home from "./routes/home";
import MoviePlay from "./routes/MoviePlay";

const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<App />}>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="home" element={<Home />} />
        <Route path="expenses" element={<Expenses />} />
        <Route path="invoices" element={<Invoices />} />
        <Route path="/movie/:id/play" element={<MoviePlay />} />
      </Route>
    </Routes>
  </BrowserRouter>,
  rootElement
);