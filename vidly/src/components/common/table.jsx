import React, { Component } from "react";
import TableHeader from "./tableHeader";
import TableBody from "./tableBody";

const table = props => {
  const { columns, sortColumn, data, onSort } = props;
  return (
    <table className="table">
      <TableHeader columns={columns} sortColumn={sortColumn} onSort={onSort} />
      <TableBody columns={columns} data={data} />
    </table>
  );
};

export default table;
