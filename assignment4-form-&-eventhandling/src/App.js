import './App.css';

import Form from './components/Form.jsx'
import CustomAlert from './components/customAlert'

import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Form />
    },
    {
      path: "/:error",
      element: <CustomAlert />,
    },
  ]);

  return (
    <div className="App">
      {/* <Form/> */}
      <RouterProvider router={router} />
    </div>
  );
}

export default App;