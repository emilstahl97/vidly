import React, { Component } from "react";
import TableHeader from "./tableHeader";
import TableBody from "./tableBody";

const table = ({ columns, sortColumn, data, onSort }) => {
  return (
    <table className="table">
      <TableHeader columns={columns} sortColumn={sortColumn} onSort={onSort} />
      <TableBody columns={columns} data={data} />
    </table>
  );
};

export default table;
