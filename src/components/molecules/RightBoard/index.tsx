import React from "react";
import { Stack } from "@mui/material";
import { TopBoard } from "../TopBoard";
import { BottomBoard } from "../BottomBoard";
import styled from "@emotion/styled";

const CustomRightBoard = styled(Stack)({
  justifyContent: "space-between",
  gap: "33px",
  alignItems: "flex-start",
  width: 462,
  height: 127,
});
export const RightBoard = () => {
  return (
    <CustomRightBoard>
      <TopBoard />
      <BottomBoard />
    </CustomRightBoard>
  );
};
