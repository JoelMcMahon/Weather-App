import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  backgroundColor: "#064663",
  color: "white",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  height: "15rem",
};

interface IProps {
  value?: any;
}

const Popup: React.FC<IProps> = ({ value }) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  // console.log(city, "<<<<<<<< Popup");
  console.log(value, "<<< Value");

  return (
    <div>
      <Button onClick={handleOpen}>Learn More</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography
            id="modal-modal-description"
            sx={{
              lineHeight: "1.5rem",
              fontWeight: "100",
            }}
          >
            <ul>
              <li>Humidity: {value.humidity}%</li>
              <li>Feels Like: {value.feelslike_c}℃</li>
              <li>UV: {value.uv}</li>
              <li>Cloud: {value.cloud}</li>
              <li>Wind Speed: {value.wind_kph} km/h</li>
              <li>Chance of Rain: {value.chance_of_rain}%</li>
              <li>Chance of Snow: {value.chance_of_snow}%</li>
            </ul>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
};

export default Popup;
