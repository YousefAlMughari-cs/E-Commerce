import Fab from "@mui/material/Fab";
import { KeyboardArrowUp } from "@mui/icons-material";
import { Zoom } from "@mui/material";
import useScrollTrigger from "@mui/material/useScrollTrigger";

export default function ScrollToTop() {
  return (
    <Zoom in={useScrollTrigger({ threshold: 100 })}>
      <Fab
        onClick={() => {
          window.scrollTo(0, 0);
        }}
        sx={{ position: "fixed", bottom: 33, right: 33 }}
        color="primary"
        aria-label="add"
        size="medium"
        variant="extended">
        <KeyboardArrowUp fontSize="medium" />
      </Fab>
    </Zoom>
  );
}
