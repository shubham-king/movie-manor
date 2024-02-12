import React, { useState, useEffect } from "react";
import { Modal, Button, Box, Typography } from "@mui/material";
import TextContainer from "./TextContainer";
import ModalLogo from "./ModalLogo.png";
import { motion } from "framer-motion";

const CustomModal = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setOpen(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 24, ease: [0.645, 0.045, 0.355, 1] }}
    >
      <Modal
        open={open}
        onClose={handleClose}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box
          onClick={(e) => {
            e.stopPropagation();
          }}
          sx={{
            display: "flex",
            flexWrap: { xs: "wrap", sm: "wrap", md: "nowrap" },
            alignItems: "center",
            justifyContent: "center",
            width: { xs: "90%", sm: "80%" },
            height: "60%",
            maxHeight: 510,
            backgroundColor: "#0c142d",
            opacity: 0.9,
            position: "relative",
          }}
        >
          <Typography
            variant="button"
            onClick={handleClose}
            sx={{
              cursor: "pointer",
              position: "absolute",
              top: 2,
              right: 12,
              color: "#5572D3",
              transition: "transform 0.2s",
              "&:hover": {
                transform: "scale(1.2)",
              },
            }}
          >
            X
          </Typography>
          <img
            src={ModalLogo}
            alt="Company Logo"
            style={{
              width: "auto",
              height: "auto",
              maxWidth: "100%",
              maxHeight: "100%",
            }}
          />
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              flexGrow: 1,
              backgroundColor: "#0c142d",
              pb: 2,
            }}
          >
            <TextContainer />
            <Box sx={{ justifyContent: "center", alignContent: "center" }}>
              <Button
                variant="contained"
                onClick={handleClose}
                sx={{
                  "&:hover": {
                    backgroundColor: "white",
                  },
                }}
              >
                Continue to site
              </Button>
            </Box>
          </Box>
        </Box>
      </Modal>
    </motion.div>
  );
};

export default CustomModal;
