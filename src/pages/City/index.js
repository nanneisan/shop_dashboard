import React from "react";
import Label from "../../components/Label";
import Table from "../../components/Table";

function City() {
  return (
    <div>
      <Label variant="h5">City List</Label>
      <Table label="city" />
    </div>
  );
}

export default City;
