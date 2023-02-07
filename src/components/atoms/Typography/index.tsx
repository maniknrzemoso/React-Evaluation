import { Typography } from "@mui/material";

interface MuiTypographyProps {
  variant:
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "h6"
    | "subtitle1"
    | "subtitle2"
    | "body1"
    | "body2"
    | "caption"
    | "button"
    | "overline"
    | "inherit"
    | undefined;
  sx?: object;
  content: string;
}

const MuiTypography: React.FC<MuiTypographyProps> = ({
  variant,
  content,
  sx,
}) => {
  return (
    <Typography sx={sx} variant={variant}>
      {content}{" "}
    </Typography>
  );
};

export default MuiTypography;
