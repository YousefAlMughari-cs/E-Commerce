// @ts-nocheck
import { Container, Stack, Typography, Box } from "@mui/material";

import ToggleButton from "@mui/material/ToggleButton";
import React from "react";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { useTheme } from "@emotion/react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import AddShoppingCartOutlinedIcon from "@mui/icons-material/AddShoppingCartOutlined";
import Rating from "@mui/material/Rating";
import Dialog from "@mui/material/Dialog";
import CloseIcon from "@mui/icons-material/Close";
import IconButton from "@mui/material/IconButton";
import ProductDetails from "./ProductDetails";

const myImage = [
  {
    text: "T-Shirt",
    price: "$19.99",
    rating: 4,
    link: "${process.env.PUBLIC_URL}../../../public/images/1.jpg",
    category: "women",
  },
  {
    text: "Jacket",
    price: "$22.99",
    rating: 4.5,
    link: "${process.env.PUBLIC_URL}../../../public/images/2.jpg",
    category: "men",
  },
  {
    text: "T-Shirt",
    price: "$21.99",
    rating: 4,
    link: "${process.env.PUBLIC_URL}../../../public/images/3.jpg",
    category: "men",
  },
  {
    text: "T-Shirt",
    price: "$20.99",
    rating: 4,
    link: "${process.env.PUBLIC_URL}../../../public/images/4.jpg",
    category: "men",
  },
  {
    text: "Trussers",
    price: "$15.99",
    rating: 5,
    link: "${process.env.PUBLIC_URL}../../../public/images/6.jpg",
    category: "women",
  },
  {
    text: "T-Shirt",
    price: "$21.99",
    rating: 4,
    link: "${process.env.PUBLIC_URL}../../../public/images/3.jpg",
    category: "women",
  },
  {
    text: "Jacket",
    price: "$22.99",
    rating: 4.5,
    link: "${process.env.PUBLIC_URL}../../../public/images/2.jpg",
    category: "men",
  },
  {
    text: "Trussers",
    price: "$15.99",
    rating: 5,
    link: "${process.env.PUBLIC_URL}../../../public/images/6.jpg",
    category: "women",
  },
  {
    text: "T-Shirt",
    price: "$20.99",
    rating: 4,
    link: "${process.env.PUBLIC_URL}../../../public/images/4.jpg",
    category: "men",
  },
  {
    text: "T-Shirt",
    price: "$19.99",
    rating: 4,
    link: "${process.env.PUBLIC_URL}../../../public/images/1.jpg",
    category: "women",
  },
  {
    text: "T-Shirt",
    price: "$20.99",
    rating: 4,
    link: "${process.env.PUBLIC_URL}../../../public/images/4.jpg",
    category: "men",
  },
  {
    text: "T-Shirt",
    price: "$20.99",
    rating: 4,
    link: "${process.env.PUBLIC_URL}../../../public/images/7.jpg",
    category: "women",
  },
];

export default function Main() {
  // ToggleButtonGroup start

  // const [alignment, setAlignment] = React.useState("left");
  // const handleAlignment = (event, newAlignment) => {
  //   setAlignment(newAlignment);
  // };

  const [selectedCategory, setSelectedCategory] = React.useState("all");

  // دالة لتغيير الفئة عند الضغط على زر الفئة
  const handleCategoryChange = (event, newCategory) => {
    if (newCategory !== null) {
      setSelectedCategory(newCategory);
    }
  };

  // تصفية المنتجات بناءً على الفئة المحددة
  const filteredProducts =
    selectedCategory === "all"
      ? myImage
      : myImage.filter((item) => item.category === selectedCategory);

  // ToggleButtonGroup end

  // color theme
  const theme = useTheme();

  // ------------------------------Dilaog start
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  // ------------------------------Dilaog end
  return (
    <Container sx={{ py: 9 }}>
      <Stack
        direction={"row"}
        alignItems={"center"}
        justifyContent={"space-between"}
        flexWrap={"wrap"}
        gap={3}>
        <Box>
          <Typography variant="h6">Selected Products</Typography>
          <Typography fontWeight={300} variant="body1">
            All our new arrivals in a exclusive brand selection
          </Typography>
        </Box>
        <ToggleButtonGroup
          color="error"
          value={selectedCategory} // استخدم selectedCategory هنا
          exclusive
          onChange={handleCategoryChange}
          aria-label="Category Selection"
          sx={{
            ".Mui-selected": {
              border: "1px solid rgba(233, 69, 96,0.5) !important",
              color: "#e94560",
              backgroundColor: "inherit",
            },
          }}>
          <ToggleButton
            sx={{ color: theme.palette.text.primary }}
            className="myButton"
            value="all"
            aria-label="all products">
            All Products
          </ToggleButton>
          <ToggleButton
            sx={{ mx: "16px !important", color: theme.palette.text.primary }}
            className="myButton"
            value="men"
            aria-label="men category">
            Men category
          </ToggleButton>
          <ToggleButton
            sx={{ color: theme.palette.text.primary }}
            className="myButton"
            value="women"
            aria-label="women category">
            Women category
          </ToggleButton>
        </ToggleButtonGroup>
      </Stack>

      <Stack
        direction={"row"}
        flexWrap={"wrap"}
        justifyContent={"space-between"}>
        {
          (myImage,
          filteredProducts.map((item, index) => {
            return (
              <Card
                key={(item, index)}
                sx={{
                  maxWidth: 333,
                  mt: 6,
                  mx: "auto",
                  ":hover .MuiCardMedia-root": {
                    scale: "1.1",
                    transition: "0.35s",
                    rotate: "1deg",
                  },
                }}>
                <CardMedia
                  sx={{
                    height: 277,
                  }}
                  image={item.link}
                  title="green iguana"
                />
                <CardContent>
                  <Stack
                    direction={"row"}
                    alignContent={"center"}
                    justifyContent={"space-between"}>
                    <Typography gutterBottom variant="h6" component={"div"}>
                      {item.text}
                    </Typography>
                    <Typography
                      gutterBottom
                      variant="subtitle1"
                      component={"p"}>
                      {item.price}
                    </Typography>
                  </Stack>
                  <Typography variant="body2" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with
                    over 6,000 species, ranging across all continents except
                    Antarctica
                  </Typography>
                </CardContent>
                <CardActions sx={{ justifyContent: "space-between" }}>
                  <Button
                    onClick={handleClickOpen}
                    sx={{ textTransform: "capitalize" }}
                    size="large">
                    <AddShoppingCartOutlinedIcon
                      sx={{ mr: 1 }}
                      fontSize="small"
                    />
                    Add to card
                  </Button>
                  <Button>
                    <Rating
                      size="medium"
                      name="read-only"
                      value={item.rating}
                      precision={0.5}
                      readOnly
                    />
                  </Button>
                </CardActions>
              </Card>
            );
          }))
        }
      </Stack>

      <Dialog
        sx={{
          ".MuiPaper-root ": { minWidth: { xs: "100%", md: 800 } },
        }}
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description">
        <IconButton
          sx={{
            position: "absolute",
            top: 0,
            right: 10,
            "&:hover": { rotate: "180deg", transition: "0.3s", color: "red" },
          }}
          onClick={handleClose}>
          <CloseIcon />
        </IconButton>
        <ProductDetails />
      </Dialog>
    </Container>
  );
}
