import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import { Login, Signup, Transactions, In, Out } from "./pages";

export default function App() {
  return (
    <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/transactions" element={<Transactions />} />
            <Route path="/transactions/in" element={<In />} />
            <Route path="/transactions/out" element={<Out />} />
          </Routes>
        </BrowserRouter>
    </AuthProvider>
  );
}