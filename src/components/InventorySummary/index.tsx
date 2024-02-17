import ShoppingCartIcon from "@mui/icons-material/ShoppingCartOutlined";
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchangeOutlined";
import RemoveShoppingCartIcon from "@mui/icons-material/RemoveShoppingCartOutlined";
import CategoryIcon from "@mui/icons-material/CategoryOutlined";

import {
  StyledBox,
  StyledIcon,
  StyledInfo,
  StyledInventoryStats,
  StyledInventorySummary,
} from "./style";
import Typography from "@mui/material/Typography";
import { InventoryItem } from "../../types/types";
import { useMemo } from "react";
type InventorySummaryProps = {
  inventoryData: InventoryItem[];
};

const InventorySummary = ({ inventoryData }: InventorySummaryProps) => {
  const totalProducts = useMemo(
      () => inventoryData.filter((item) => !item.isDisabled).length,
      [inventoryData]
    ),
    outOfStockProducts = useMemo(
      () =>
        inventoryData.filter((item) => item.quantity === 0 && !item.isDisabled)
          .length,
      [inventoryData]
    ),
    totalCategories = useMemo(
      () =>
        new Set(
          inventoryData
            .filter((item) => !item.isDisabled)
            .map((item) => item.category)
        ).size,
      [inventoryData]
    ),
    totalStoreValue = useMemo(
      () =>
        inventoryData
          .filter((item) => !item.isDisabled)
          .map((item) => item.value)
          .reduce((acc, cur) => acc + cur, 0),
      [inventoryData]
    );
  return (
    <>
      <StyledInventoryStats>
        <Typography variant="h2">Inventory Stats</Typography>
      </StyledInventoryStats>
      <StyledInventorySummary>
        <StyledBox>
          <StyledIcon>
            <ShoppingCartIcon sx={{ color: "white" }} />
          </StyledIcon>
          <StyledInfo>
            <Typography>Total product</Typography>
            {totalProducts}
          </StyledInfo>
        </StyledBox>
        <StyledBox>
          <StyledIcon>
            <CurrencyExchangeIcon sx={{ color: "white" }} />
          </StyledIcon>
          <StyledInfo>
            <Typography>Total store value</Typography>
            {totalStoreValue}
          </StyledInfo>
        </StyledBox>
        <StyledBox>
          <StyledIcon>
            <RemoveShoppingCartIcon sx={{ color: "white" }} />
          </StyledIcon>

          <StyledInfo>
            <Typography>Out of stocks</Typography>
            {outOfStockProducts}
          </StyledInfo>
        </StyledBox>
        <StyledBox>
          <StyledIcon>
            <CategoryIcon sx={{ color: "white" }} />
          </StyledIcon>

          <StyledInfo>
            <Typography>No of category</Typography>
            {totalCategories}
          </StyledInfo>
        </StyledBox>
      </StyledInventorySummary>
    </>
  );
};

export default InventorySummary;
