const INVENTORY_FETCH_URL =
  "https://dev-0tf0hinghgjl39z.api.raw-labs.com/inventory";

const useFetchInventoryData = (setInventoryData: Function) => {
  const fetchInventoryData = async () => {
    try {
      const response = await fetch(INVENTORY_FETCH_URL);
      console.log("response: ", response);
      const result = await response.json();
      console.log(result);
      setInventoryData(
        result.map((item: any) => {
          return {
            ...item,
            price: ["0", "$0"].includes(item.price)
              ? 0
              : parseInt(item.price.substring(1)),
            value: ["0", "$0"].includes(item.value)
              ? 0
              : parseInt(item.value.substring(1)),
            isDisabled: false,
          };
        })
      );
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  return fetchInventoryData;
};

export default useFetchInventoryData;
