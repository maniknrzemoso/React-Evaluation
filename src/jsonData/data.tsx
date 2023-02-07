interface TopBoardDataType {
  variant:
    | "button"
    | "caption"
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "h6"
    | "inherit"
    | "subtitle1"
    | "subtitle2"
    | "body1"
    | "body2"
    | "overline"
    | undefined;
  content: string;
  sx: object;
}
const topBoardData: TopBoardDataType[] = [
  {
    variant: "h3",
    content: "User Experience Designer",
    sx: { height: 30, width: 263, fontSize: 20 },
  },
  {
    variant: "caption",
    content: "Myntra",
    sx: { width: 44, height: 16, color: "#FF725E" },
  },
  {
    variant: "caption",
    content: "Hitech city,Hyderabad-500072",
    sx: { color: "#656E66" },
  },
];

export { topBoardData };
const bottomBoardData = ["scooter", "Bus", "Car", "Train"];

export { bottomBoardData };
