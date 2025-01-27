import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './components/Home';
import CardDetails from "./components/CardDetails";

const App = () => {
  return (
    <>
      <BrowserRouter basename="/">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/carddetails/:id" element={<CardDetails />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;