import { useEffect, useState } from "react";
import { Grid } from "@mui/material";

const Dashboard = (props) => {
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  return (
    <>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Grid item lg={4} md={6} sm={6} xs={12}>
            test
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default Dashboard;
