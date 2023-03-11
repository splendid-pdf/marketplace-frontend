import Box from "@mui/material/Box";
import p1 from "../../../shared/images/popular/p1.png";
import p2 from "../../../shared/images/popular/p2.png";
import p3 from "../../../shared/images/popular/p3.png";
import p4 from "../../../shared/images/popular/p4.png";
import p5 from "../../../shared/images/popular/p5.png";
import p6 from "../../../shared/images/popular/p6.png";
import "./style.css";

export const Popular = () => {
  return (
    <div className={"content" + " " + "container"}>
      <div className="popular-container">
        <div className="titles">
          <h1>Популярные категории</h1>
        </div>
        <Box sx={{ width: 1 }}>
          <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={2}>
            <Box gridColumn="span 6">
              <div>
                <img src={p1} alt="" />
              </div>
            </Box>
            <Box gridColumn="span 3">
              <img src={p2} />
            </Box>
            <Box gridColumn="span 3">
              <img src={p3} />
            </Box>
            <Box gridColumn="span 3">
              <img src={p4} />
            </Box>
            <Box gridColumn="span 3">
              <img src={p5} />
            </Box>
            <Box gridColumn="span 6">
              <img src={p6} />
            </Box>
          </Box>
        </Box>
      </div>
    </div>
  );
};
