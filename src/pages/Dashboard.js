import React from "react";
import Grid from "@material-ui/core/Grid";
import ReportCard from "../components/ReportCard";
import Table from "../components/Table";
import TableFilter from "../components/TableFilter";

function Dashboard() {
  return (
    <Grid container spacing={4}>
      {[1, 2, 3, 4, 5, 6].map((one) => (
        <Grid item xs={4} sm={4} key={one}>
          <ReportCard title="Order Summary" count={one} />
        </Grid>
      ))}
      <Grid item xs={12} sm={12}>
        <ReportCard
          title="Order Lists"
          body={
            <div>
              <Table />
            </div>
          }
        />
      </Grid>
    </Grid>
  );
}

export default Dashboard;
