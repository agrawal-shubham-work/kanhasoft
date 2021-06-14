import "bootstrap/dist/css/bootstrap.min.css";
import moment from "moment";
import { useEffect, useState } from "react";
import BootstrapTable from "react-bootstrap-table-next";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import { useSelector } from "react-redux";
import "./SportActivityTable.css";

export const SportActivityTable = (props) => {
  const data = useSelector((state) => state.overview.tableData);
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    setTableData(data);
  }, [data]);

  const columns = [
    {
      dataField: "fullName",
      text: "Full Name",
      headerStyle: {
        verticalAlign: "middle",
        textAlign: "left",
      },
      style: {
        verticalAlign: "middle",
        textAlign: "left",
      },
    },
    {
      dataField: "studentId",
      text: "Student Id",
      headerStyle: {
        verticalAlign: "middle",
        textAlign: "left",
      },
      style: {
        verticalAlign: "middle",
        textAlign: "left",
      },
    },
    {
      dataField: "standard",
      text: "Standard",
      headerStyle: {
        verticalAlign: "middle",
        textAlign: "left",
      },
      style: {
        verticalAlign: "middle",
        textAlign: "left",
      },
    },
    {
      dataField: "address",
      text: "Address",
      headerStyle: {
        verticalAlign: "middle",
        textAlign: "left",
      },
      style: {
        verticalAlign: "middle",
        textAlign: "left",
      },
    },
    {
      dataField: "dob",
      text: "Date of birth",
      sort: true,
      headerStyle: {
        verticalAlign: "middle",
        textAlign: "left",
      },
      style: {
        verticalAlign: "middle",
        textAlign: "left",
      },
      formatter: (cell, row, rowIndex) => (
        <span>{moment(cell).format("DD/MM/YYYY")}</span>
      ),
    },
    {
      dataField: "sportActivity",
      text: "Sport Activity",
      headerStyle: {
        verticalAlign: "middle",
        textAlign: "left",
      },
      style: {
        verticalAlign: "middle",
        textAlign: "left",
      },
    },
  ];

  return (
    <>
      <div className="sportTable">
        <BootstrapTable
          bootstrap4
          keyField="id"
          bordered={false}
          data={tableData}
          columns={columns}
        />
      </div>
    </>
  );
};
