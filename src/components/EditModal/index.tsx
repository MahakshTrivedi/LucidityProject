import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import { InventoryItem } from "../../types/types";
import CloseIcon from "@mui/icons-material/CloseOutlined";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import {
  StyledModal,
  StyledModalFooter,
  StyledModalHeader,
  StyledText,
  StyledInputs,
  StyledInput,
  StyledCancelIcon,
} from "./style";
import { useState } from "react";

type EditModalProps = {
  open: boolean;
  setOpen: Function;
  selectedIndex: number;
  setInventoryData: Function;
  inventoryData: InventoryItem[];
};

const EditModal = ({
  open,
  setOpen,
  setInventoryData,
  selectedIndex,
  inventoryData,
}: EditModalProps) => {
  const handleClose = () => setOpen(false);
  const inventoryItem =
    selectedIndex >= 0 ? inventoryData[selectedIndex] : null;
  const [editedValues, setEditedValues] = useState({
    category: inventoryItem?.category,
    price: inventoryItem?.price,
    quantity: inventoryItem?.quantity,
    value: inventoryItem?.value,
  });
  const handleInputChange = (fieldName: string, value: any) => {
    setEditedValues((prevValues) => ({
      ...prevValues,
      [fieldName]: value,
    }));
  };

  const handleSaveChanges = () => {
    setInventoryData([
      ...inventoryData.slice(0, selectedIndex),
      {
        ...inventoryItem,
        ...editedValues,
      },
      ...inventoryData.slice(selectedIndex + 1),
    ]);
    handleClose();
  };

  const hasChanges = () => {
    return (
      editedValues.category !== inventoryItem?.category ||
      editedValues.price !== inventoryItem?.price ||
      editedValues.quantity !== inventoryItem?.quantity ||
      editedValues.value !== inventoryItem?.value
    );
  };

  return (
    <StyledModal>
      <Modal
        open
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            width: 400,
            transform: "translate(-50%, -50%)",
            bgcolor: "white",
            p: 3,
            borderRadius: "8px",
            backgroundColor: "#292b27",
          }}
        >
          <StyledModalHeader>
            <Typography variant="h4">
              <StyledText>Edit product</StyledText>
            </Typography>
            <StyledCancelIcon>
              <IconButton onClick={handleClose} aria-label="Delete">
                <CloseIcon sx={{ color: "#deff55" }} />
              </IconButton>
            </StyledCancelIcon>
          </StyledModalHeader>

          <Typography variant="h6">
            <StyledText>{inventoryItem?.name}</StyledText>
          </Typography>

          <StyledInputs>
            <StyledInput>
              <label htmlFor="category">
                <StyledText>Category</StyledText>
              </label>
              <input
                type="text"
                id="category"
                value={editedValues.category}
                placeholder={(inventoryItem?.category as string) || ""}
                onChange={(e) => handleInputChange("category", e.target.value)}
              />
            </StyledInput>
            <StyledInput>
              <label htmlFor="price">
                <StyledText>price</StyledText>
              </label>
              <input
                type="number"
                id="price"
                value={editedValues.price}
                placeholder={(inventoryItem?.price ?? 0).toString()}
                onChange={(e) =>
                  handleInputChange("price", parseFloat(e.target.value))
                }
              />
            </StyledInput>
          </StyledInputs>

          <StyledInputs>
            <StyledInput>
              <label htmlFor="quantity">
                <StyledText>quantity</StyledText>
              </label>
              <input
                type="number"
                id="quantity"
                value={editedValues.quantity}
                placeholder={(inventoryItem?.quantity ?? 0).toString()}
                onChange={(e) => handleInputChange("quantity", e.target.value)}
              />
            </StyledInput>
            <StyledInput>
              <label htmlFor="value">
                <StyledText>value</StyledText>
              </label>
              <input
                type="number"
                id="value"
                value={editedValues.value}
                placeholder={(inventoryItem?.value ?? 0).toString()}
                onChange={(e) =>
                  handleInputChange("value", parseFloat(e.target.value))
                }
              />
            </StyledInput>
          </StyledInputs>

          {/* <Box sx={{ mt: 2, display: "flex", justifyContent: "space-between" }}> */}
          <StyledModalFooter>
            <Button onClick={handleClose} color="secondary">
              <Typography style={{ color: "#deff55", textTransform: "none" }}>
                Cancel
                {/* <StyledText>Cancel</StyledText> */}
              </Typography>
            </Button>
            <Button
              onClick={handleSaveChanges}
              color="primary"
              disabled={!hasChanges()}
              sx={{
                backdropFilter: hasChanges() ? "blur(0)" : "blur(10px)",
                backgroundColor: "#434541",
              }}
            >
              <Typography
                sx={{
                  textTransform: "none",
                  color: hasChanges() ? "white" : "#6f706d",
                }}
              >
                {/* <StyledText> */}
                    Save
                    {/* </StyledText> */}
              </Typography>
            </Button>
          </StyledModalFooter>
          {/* </Box> */}
        </Box>
      </Modal>
    </StyledModal>
  );
};

export default EditModal;
