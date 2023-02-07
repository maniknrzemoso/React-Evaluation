import React from "react";
import Box from "@mui/material/Box";
import Myntra from "../../../icons/myntra.svg";
import { RightBoard } from "../../molecules/RightBoard";
import { styled } from "@mui/system";
import { Card } from "@mui/material";
const MuiCustomBox = styled(Box)({
  display: "flex",
  gap: "16px",
  padding: "16px 19px",
  alignItems: "flex-start",
  width: 533,
  height: 127,
  p: 0,
});
const CustomCard = styled(Card)({
  width: 571,
  height: 159,
  borderRadius: "12px",
});

export const MuiCard = () => {
  return (
    <CustomCard>
      <MuiCustomBox>
        <img src={Myntra} alt="failed to load" />
        <RightBoard />
      </MuiCustomBox>
    </CustomCard>
  );
};
