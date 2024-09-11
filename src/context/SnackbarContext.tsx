"use client";
import { AlertProps, Slide, SlideProps, Snackbar } from "@mui/material";
import { createContext, useContext, useState } from "react";

interface SnackbarContextType {
  showSnackbar: (message: string, severity?: AlertProps["severity"]) => void;
}

function SlideTransition(props: SlideProps) {
  return <Slide {...props} direction="left" />;
}

const SnackbarContext = createContext<SnackbarContextType | undefined>(
  undefined
);

export const useSnackbar = () => {
  const context = useContext(SnackbarContext);
  if (!context) {
    throw new Error("useSnackbar must be used within a SnackbarProvider");
  }
  return context;
};

const SnackbarProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");

  const showSnackbar = (
    message: string,
    severity: AlertProps["severity"] = "info"
  ) => {
    setMessage(message);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <SnackbarContext.Provider value={{ showSnackbar }}>
      {children}
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        open={open}
        onClose={handleClose}
        TransitionComponent={SlideTransition}
        autoHideDuration={1200}
        message={message}
      />
    </SnackbarContext.Provider>
  );
};

export default SnackbarProvider;
