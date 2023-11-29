import { Box, Button } from "@mui/material";
import { useRef } from "react";
import Webcam from "react-webcam";

export const App = () => {
  const camRef = useRef(null);

  const capture = () => {
    const imageSrc = camRef.current.getScreenshot();

    fetch("http://127.0.0.1:8000/recognition", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ img: imageSrc.split(',')[1] }),
    })
      .then((res) => res.json())
      .then((res) => console.log(res))
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <Box sx={{ p: 2 }} component="section">
      <Webcam
        height={300}
        width={300}
        screenshotFormat="image/jpeg"
        ref={camRef}
      />
      <Button variant="contained" onClick={capture}>
        Tomar foto
      </Button>
    </Box>
  );
};
