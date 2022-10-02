import Home from "./pages/home/home";
import Login from "./pages/login/Login";
import List from "./pages/list/List";
import NewPage from "./pages/newPage/NewPage";
import Single from "./pages/single/Single";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
        </Route>
        <Route path="users">
          <Route index element={<List />} />
          <Route path=":userId" element={<Single />} />
          <Route path="new" element={<NewPage />} />
        </Route>
        <Route path="products">
          <Route index element={<List />} />
          <Route path=":productId" element={<Single />} />
          <Route path="new" element={<NewPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
