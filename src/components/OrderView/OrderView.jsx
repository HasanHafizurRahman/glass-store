import { useEffect, useState } from "react";
import OrderTable from "./OrderTable";
import Pagination from "../Pagination/Pagination";

const OrderView = () => {
  const [selectedTab, setSelectedTab] = useState("All Orders");
  const [currentPage, setCurrentPage] = useState(1);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetch("data.json")
      .then((req) => req.json())
      .then((data) => setOrders(data));
  }, []);

  const handleTabClick = (tabName) => {
    setSelectedTab(tabName);
    setCurrentPage(1);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  // filter order based on tab

  const filteredOrders = orders.filter((order) => {
    if (selectedTab === "All Orders") {
      return true;
    } else if (selectedTab === "Regular Delivery") {
      return order.deliveryType === "Regular";
    } else if (selectedTab === "Express Delivery") {
      return order.deliveryType === "Express";
    }
    return false;
  });

  // pagination logic
  const pageSize = 14;
  const startIndex = (currentPage - 1) * pageSize;
  const paginatedOrders = filteredOrders.slice(
    startIndex,
    startIndex + pageSize
  );

  const allselect = selectedTab === "All Orders" ? "active" : "";
  const regularselect = selectedTab === "Regular Delivery" ? "active" : "";
  const expressselect = selectedTab === "Express Delivery" ? "active" : "";
  return (
    <div>
      <div className="flex justify-center mb-1">
        <button
          className={`tab-btn ${allselect}`}
          onClick={() => handleTabClick("All Orders")}
        >
          All Orders
        </button>
        <button
          className={`tab-btn ${regularselect}`}
          onClick={() => handleTabClick("Regular Delivery")}
        >
          Regular Delivery
        </button>
        <button
          className={`tab-btn ${expressselect}`}
          onClick={() => handleTabClick("Express Delivery")}
        >
          Express Delivery
        </button>
      </div>
      <OrderTable orders={paginatedOrders} />
      <Pagination
        currentPage={currentPage}
        pageSize={pageSize}
        onPageChange={handlePageChange}
        totalItems={filteredOrders.length}
      />
    </div>
  );
};

export default OrderView;
