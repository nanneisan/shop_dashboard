import React from "react";
import Label from "../../components/Label";
import Table from "../../components/Table";

function UserGroup() {
  return (
    <div>
      <Label variant="h5">Usergroup List</Label>
      <Table label="usergroup" />
    </div>
  );
}

export default UserGroup;
