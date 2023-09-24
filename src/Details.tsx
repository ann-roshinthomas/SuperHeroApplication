import Box from "@mui/material/Box";
import Modal from "@mui/joy/Modal";
import Button from "@mui/joy/Button";
import ModalClose from "@mui/joy/ModalClose";
import { useState } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import WorkIcon from "@mui/icons-material/Work";
import AccessibilityIcon from "@mui/icons-material/Accessibility";
import PsychologyIcon from "@mui/icons-material/Psychology";
import Face6Icon from "@mui/icons-material/Face6";
import "./Details.css";

type detailType = {
  id: string;
  name: string;
  intelligence: string;
  strength: string;
  speed: string;
  durability: string;
  power: string;
  fullName: string;
  birthPlace: string;
  firstAppearance: string;
  gender: string;
  race: string;
  height: string;
  weight: string;
  eyeColor: string;
  hairColor: string;
  occupation: string;
  publisher: string;
  image: string;
};

type detailProps = {
  open: boolean;
  data: detailType;
  compareList: detailType[];
  setCompareList: React.Dispatch<React.SetStateAction<any>>;
  setOpen: React.Dispatch<React.SetStateAction<any>>;
};
function Details({
  open,
  data,
  compareList,
  setCompareList,
  setOpen,
}: detailProps) {
  const [isCompare, setIsCompare] = useState(false);
  const handleClose = () => setOpen(false);

  const handleAddtoCompare = (data: detailType) => {
    if (compareList.length > 5) {
      alert("Compare count exceeded");
    } else {
      let newdata = [...compareList, data];
      setIsCompare(true);
      setCompareList(newdata);
    }
  };

  const handleRemoveCompare = (data: detailType) => {
    let newdata = compareList.filter((item) => item.id != data.id);
    setIsCompare(false);
    setCompareList(newdata);
  };
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 1000,
          height: 700,
          "@media screen and (max-width: 750px)": {
            width: 500,
            p: 0,
          },
          "@media screen and (max-width: 500px)": {
            width: 380,
            p: 0,
          },
          bgcolor: "background.paper",
          boxShadow: 24,
          p: 4,
        }}
      >
        <div className="details_div">
          <ModalClose variant="plain" sx={{ m: 1 }} />
          <div className="img_div">
            <img
              srcSet={`${data.image}`}
              src={`${data.image}?fit=crop&&auto=format`}
            />
          </div>
          <List
            sx={{
              width: "100%",
              maxWidth: 450,
              maxHeight: 600,
              "@media screen and (max-width: 750px)": {
                maxWidth: 480,
                maxHeight: 800,
                margin: 0,
                opacity: 0.9,
              },
              "@media screen and (max-width: 500px)": {
                maxWidth: 390,
                maxHeight: 800,
                margin: 0,
                opacity: 0.9,
              },
              overflow: "auto",
              bgcolor: "background.paper",
            }}
          >
            <ListItem
              sx={{
                p: 2,
              }}
            >
              <ListItemAvatar>
                <Avatar sx={{ bgcolor: "#007F82" }}></Avatar>
              </ListItemAvatar>
              <ListItemText primary={data.name} secondary={data.gender} />
            </ListItem>
            <ListItem sx={{ p: 2 }}>
              <ListItemAvatar>
                <Avatar sx={{ bgcolor: "#007F82" }}>
                  <WorkIcon />
                </Avatar>
              </ListItemAvatar>
              Full Name : {data.fullName ? data.fullName : "--NA--"}
            </ListItem>
            <ListItem sx={{ p: 2 }}>
              <ListItemAvatar>
                <Avatar sx={{ bgcolor: "#007F82" }}>
                  <WorkIcon />
                </Avatar>
              </ListItemAvatar>
              Occupation : {data.occupation ? data.occupation : "--NA--"}
            </ListItem>
            <ListItem sx={{ p: 2 }}>
              <ListItemAvatar>
                <Avatar sx={{ bgcolor: "#007F82" }}>
                  <WorkIcon />
                </Avatar>
              </ListItemAvatar>
              Publisher : {data.publisher ? data.publisher : "--NA--"}
            </ListItem>
            <ListItem sx={{ p: 2 }}>
              <ListItemAvatar>
                <Avatar sx={{ bgcolor: "#007F82" }}>
                  <WorkIcon />
                </Avatar>
              </ListItemAvatar>{" "}
              First Appearance :{" "}
              {data.firstAppearance ? data.firstAppearance : "--NA--"}
            </ListItem>
            <ListItem sx={{ p: 2 }}>
              <ListItemAvatar>
                <Avatar sx={{ bgcolor: "#007F82" }}>
                  <AccessibilityIcon />
                </Avatar>
              </ListItemAvatar>{" "}
              Height : {data.height ? data.height : "--NA--"} , Weight :{" "}
              {data.weight ? data.weight : "--NA--"}
            </ListItem>

            <ListItem sx={{ p: 2 }}>
              <ListItemAvatar>
                <Avatar sx={{ bgcolor: "#007F82" }}>
                  <Face6Icon />
                </Avatar>
              </ListItemAvatar>{" "}
              Hair Color : {data.hairColor ? data.hairColor : "--NA--"} , Eye
              color : {data.eyeColor ? data.eyeColor : "--NA--"}
            </ListItem>

            <ListItem sx={{ p: 2 }}>
              <ListItemAvatar>
                <Avatar sx={{ bgcolor: "#007F82" }}>
                  <PsychologyIcon />
                </Avatar>
              </ListItemAvatar>{" "}
              Intelligence :{" "}
              {data.intelligence && data.intelligence !== null
                ? data.intelligence
                : "--NA--"}{" "}
              , Strength:{" "}
              {data.strength && data.strength !== null
                ? data.strength
                : "--NA--"}
              , Durability : {data.durability ? data.durability : "--NA--"} ,
              Power: {data.power ? data.power : "--NA--"} , Speed:{" "}
              {data.speed ? data.speed : "--NA--"}
            </ListItem>
          </List>
        </div>
        <div className="btn_div">
          {!isCompare && (
            <Button
              sx={{
                my: 2,
                bgcolor: "#007F82",
                "&:hover": { bgcolor: "#00A8A8" },
              }}
              onClick={(event) => handleAddtoCompare(data)}
            >
              Add To Compare
            </Button>
          )}
          {isCompare && (
            <Button
              sx={{
                my: 2,
                bgcolor: "#007F82",
                "&:hover": { bgcolor: "#00A8A8" },
              }}
              onClick={(event) => handleRemoveCompare(data)}
            >
              Remove from Compare
            </Button>
          )}
          <Button
            sx={{
              ml: 2,
              bgcolor: "#007F82",
              "&:hover": { bgcolor: "#00A8A8" },
            }}
            onClick={handleClose}
          >
            Close
          </Button>
        </div>
      </Box>
    </Modal>
  );
}

export default Details;
