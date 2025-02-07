import { Box, Button, Typography } from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
export default function Footer() {
  return (
    <div>
      <Box
        sx={{
          bgcolor: "#2b3445",
          py: 1.3,
          borderTopLeftRadius: 8,
          borderTopRightRadius: 8,
        }}>
        <Button
          sx={{
            mt: 0.5,
            fontSize: {
              xs: "12px",
              sm: "14px",
              md: "16px",
            },
            textTransform: "capitalize",
            color: "#fff",
            backgroundColor: "#25D366",
            border: "1px solid #25D366",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            mx: "auto",
            width: {
              xs: "130px",
              sm: "140px",
              md: "150px",
            },
            maxWidth: "100%",
            px: 2,
            py: 1,
            borderRadius: "8px",
            "&:hover": {
              backgroundColor: "#1DA851",
              scale: 1.05,
              transition: "0.35s",
            },
          }}
          variant="contained"
          href="https://wa.me/972569970140"
          target="_blank">
          <WhatsAppIcon sx={{ mx: 0.5 }} />
          Whats App
        </Button>
        <Typography
          justifyContent={"center"}
          display={"flex"}
          alignItems={"center"}
          color={"HighlightText"}
          variant="h6"
          sx={{
            fontSize: {
              xs: "14px",
              sm: "16px",
              md: "18px",
            },
          }}>
          Designed and developed by ❤️
          <Button
            sx={{
              mt: 0.5,
              fontSize: { xs: "14px", sm: "16px", md: "16px" },
              textTransform: "capitalize",
              color: "#ff7790",
            }}
            variant="text"
            color="primary"
            href="https://github.com/YousefAlMughari-cs"
            target="_blank">
            yousef al mughari
          </Button>
          &copy; 2025
        </Typography>
      </Box>
    </div>
  );
}
