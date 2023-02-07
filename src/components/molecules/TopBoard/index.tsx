import React from "react";
import Box from "@mui/material/Box";
import MuiTypography from "../../atoms/Typography";
import { MuiIcon } from "../../atoms/Icon";
import styled from "@emotion/styled";
import { topBoardData } from "../../../jsonData/data";
const CustomTopBoard = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  height: 70,
  width: 462,
  gap: 172,
});

export const TopBoard = () => {
  return (
    <CustomTopBoard>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
        }}
      >
        {topBoardData.map((data, key) => (
          <MuiTypography
            key={key + 1}
            variant={data.variant}
            content={data.content}
            sx={data.sx}
          />
        ))}
      </Box>
      <MuiIcon icon="Options" />
    </CustomTopBoard>
  );
};
