import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import EditIcon from "@mui/icons-material/EditOutlined";
import VisibilityIcon from "@mui/icons-material/VisibilityOutlined";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOffOutlined";
import DeleteIcon from "@mui/icons-material/DeleteOutlined";
import IconButton from "@mui/material/IconButton";
import { StyledColumn, StyledTable } from "./style";
import { InventoryItem } from "../../types/types";
import { useState } from "react";
import EditModal from "../EditModal";
import { Typography } from "@mui/material";

type InventoryTableProps = {
  isUserMode: boolean;
  inventoryData: InventoryItem[];
  setInventoryData: Function;
};

const InventoryTable = ({
  isUserMode,
  inventoryData,
  setInventoryData,
}: InventoryTableProps) => {
  const [open, setOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const handleOpen = (index: number) => {
    setOpen(true);
    setSelectedIndex(index);
  };
  const handleClose = () => setOpen(false);

  const handleView = (index: number) => {
    setInventoryData(
      inventoryData.map((item, idx) =>
        idx === index
          ? {
              ...item,
              isDisabled: !item.isDisabled,
            }
          : item
      )
    );
  };

  const handleDelete = (index: number) => {
    setInventoryData(inventoryData.filter((item, idx) => idx !== index));
  };

  return (
    <StyledTable>
      <TableContainer
        component={Paper}
        sx={{
          padding: "0px 0px",
          backgroundColor: "#212124",
          fontSize: "1.1rem",
          height: "100%",
          width: "100%",
          borderRadius: "10px",
        }}
      >
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>
                <StyledColumn>Name</StyledColumn>
              </TableCell>
              <TableCell>
                <StyledColumn>Category</StyledColumn>
              </TableCell>
              <TableCell>
                <StyledColumn>Price</StyledColumn>
              </TableCell>
              <TableCell>
                <StyledColumn>Quantity</StyledColumn>
              </TableCell>
              <TableCell>
                <StyledColumn>Value</StyledColumn>
              </TableCell>
              <TableCell>
                <StyledColumn>ACTION</StyledColumn>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody sx={{ backgroundColor: "#212124" }}>
            {inventoryData?.map((inventoryItem, index) => (
              <TableRow sx={{borderBottomColor:"#39393c"}}>
                <TableCell>
                  <Typography
                    sx={{
                      color: !inventoryItem.isDisabled ? "white" : "#6f706d",
                    }}
                  >
                    {inventoryItem.name}
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography
                    sx={{
                      color: !inventoryItem.isDisabled ? "white" : "#6f706d",
                    }}
                  >
                    {inventoryItem.category}
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography
                    sx={{
                      color: !inventoryItem.isDisabled ? "white" : "#6f706d",
                    }}
                  >
                    {`${inventoryItem.price > 0 ? "$" : ""}${
                      inventoryItem.price
                    }`}
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography
                    sx={{
                      color: !inventoryItem.isDisabled ? "white" : "#6f706d",
                    }}
                  >
                    {inventoryItem.quantity}
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography
                    sx={{
                      color: !inventoryItem.isDisabled ? "white" : "#6f706d",
                    }}
                  >
                    {`${inventoryItem.value > 0 ? "$" : ""}${
                      inventoryItem.value
                    }`}
                  </Typography>
                </TableCell>
                <TableCell>
                  <IconButton
                    onClick={() => handleOpen(index)}
                    disabled={isUserMode}
                    aria-label="Edit"
                  >
                    <EditIcon
                      {...(isUserMode||inventoryItem?.isDisabled
                        ? { sx: { color: "grey" } }
                        : { sx: { color: "green" } })}
                    />
                  </IconButton>
                  <IconButton
                    onClick={() => handleView(index)}
                    aria-label="View"
                    disabled={isUserMode}
                  >
                    {inventoryItem?.isDisabled && !isUserMode ? (
                      <VisibilityOffIcon sx={{ color: "purple" }} />
                    ) : (
                      <VisibilityIcon
                        {...(isUserMode
                          ? { sx: { color: "grey" } }
                          : { sx: { color: "purple" } })}
                      />
                    )}
                  </IconButton>
                  <IconButton
                    onClick={() => handleDelete(index)}
                    disabled={isUserMode}
                    aria-label="Delete"
                  >
                    <DeleteIcon
                      {...(isUserMode
                        ? { sx: { color: "grey" } }
                        : { sx: { color: "red" } })}
                    />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      {open && (
        <EditModal
          open={open}
          setOpen={setOpen}
          selectedIndex={selectedIndex}
          setInventoryData={setInventoryData}
          inventoryData={inventoryData}
        />
      )}
    </StyledTable>
  );
};

export default InventoryTable;
