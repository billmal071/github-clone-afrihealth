import { Box } from "@chakra-ui/react";
import "./App.css";
import Profile from "./pages";
import ProfileState from "./context/profile.state";

function App() {
  return (
    <ProfileState>
      <Box w="100%" bgColor={"brand.bodyColor"} color={"brand.bodyColor"}>
        <Profile />
      </Box>
    </ProfileState>
  );
}

export default App;
