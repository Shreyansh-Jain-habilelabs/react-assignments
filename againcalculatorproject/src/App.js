import './App.css';
import Calci from "./components/Calci.jsx";
import Box from "@mui/material/Box";

function App() {
  return (
    <Box
      component="div"
      sx={{
        width: "100%",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#ededed"
      }}
    >
      <Calci />
    </Box>
  );
}

export default App;
