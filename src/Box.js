/** @jsx jsx */
import { jsx } from "theme-ui";

const Box = ({ onClick, children, is = "div", ...props }) => {
  const Tag = is;

  return (
    <Tag onClick={onClick} sx={{ ...props }}>
      {children}
    </Tag>
  );
};

export default Box;
