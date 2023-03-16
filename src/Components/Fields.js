import React from "react";
import { Stack } from "@mui/material";
import { Button } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
const Fields = ({ name, email, index }) => {
  return (
    <div className="data_val">
      <h3>{name}</h3>
      <h3>{email}</h3>
      <Stack>
        <Button variant="outlined" color="error">
            <DeleteIcon/>
        </Button>
      </Stack>
    </div>
  );
};

export default Fields;
