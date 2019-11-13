import React from "react";
import axios from "axios";
import { Button } from "@material-ui/core";

function App() {
  return (
    <Button
      variant="contained"
      color="primary"
      onClick={async () => {
        const res = await axios.get(
          "/~cen4010fal19_g12/campus_snapshots/server/index.php"
        );
        console.log(res.data);
      }}
    >
      Click me to get a console.log from the server
    </Button>
  );
}

export default App;
