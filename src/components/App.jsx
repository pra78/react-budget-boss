import Home from "pages/Home/Home";
import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./Layout/Layout";
import Report from "pages/Report/Report";
import Transactions from "pages/Transactions/Transactions";


export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="report" element={<Report />} />
        <Route path="transactions" element={<Transactions />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  );
};
