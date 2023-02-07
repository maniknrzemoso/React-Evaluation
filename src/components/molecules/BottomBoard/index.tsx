import Box from "@mui/material/Box";
import { MuiIcon } from "../../atoms/Icon";
import MuiTypography from "../../atoms/Typography";
import styled from "@emotion/styled";
import { bottomBoardData } from "../../../jsonData/data";
const CustomBottomBoard = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "flex-end",
  padding: 0,
  // gap: "268px",
  width: 462,
  height: 24,
});

const CustomBottomLeft = styled(Box)({
  display: "flex",

  width: 144,
  height: 24,
  gap: "16px",
  alignContent: "center",
});

export const BottomBoard = () => {
  return (
    <CustomBottomBoard>
      <CustomBottomLeft>
        {bottomBoardData.map((icon) => (
          <MuiIcon icon={icon} />
        ))}
      </CustomBottomLeft>
      <MuiTypography
        content="36 min ago"
        variant="caption"
        sx={{
          color: "#656E66",
          width: 70,
          height: 16,
          padding: 0,
        }}
      />
    </CustomBottomBoard>
  );
};
