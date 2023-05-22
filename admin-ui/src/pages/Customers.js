import React, { useEffect } from "react";
import { Table } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../features/cutomers/customerSlice";
const columns = [
  {
    title: "SNo",
    dataIndex: "key",
  },
  {
    title: "id",
    dataIndex: "id",
  },
  {
    title: "Email",
    dataIndex: "email",
    sorter: (a, b) => a.email.length - b.email.length,
  },
  {
    title: "Active",
    dataIndex: "active",
  },
  {
    title: "Roles",
    dataIndex: "roles",
  },
];

const Customers = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUsers());
  }, []);
  const customerstate = useSelector((state) => state.customer.customers);
  console.log(customerstate.data);

  const data1 = [];
  for (let i = 0; i < customerstate?.data?.length; i++) {
    // if (customerstate[i].roles !== "admin") {
    console.log(customerstate.data[i].isActive);
    data1.push({
      key: i + 1,
      id: customerstate.data[i]._id,
      email: customerstate.data[i].email,
      active: customerstate.data[i].isActive.toString(),
      roles: customerstate.data[i].roles.join(", "),
    });
    // }
  }

  return (
    <div>
      <h3 className="mb-4 title">Customers</h3>
      <div>
        <Table columns={columns} dataSource={data1} />
      </div>
    </div>
  );
};

export default Customers;
