import React, { useEffect, useState } from "react";
import useFetchInventoryData from "../../hooks/useFetchInventoryData";
import InventorySummary from "../../components/InventorySummary";
import InventoryTable from "../../components/InventoryTable";
import { dummyInventoryData } from "../../constants/constants";

type InventoryStatsProps = {
  isUserMode: boolean;
};

const InventoryStats = ({ isUserMode }: InventoryStatsProps) => {
  const [inventoryData, setInventoryData] = useState([]);
  const fetchInventoryData = useFetchInventoryData(setInventoryData);
  useEffect(() => {
    fetchInventoryData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <InventorySummary inventoryData={inventoryData || dummyInventoryData} />
      <InventoryTable
        isUserMode={isUserMode}
        inventoryData={inventoryData || dummyInventoryData}
        setInventoryData={setInventoryData}
      />
    </>
  );
};

export default InventoryStats;
