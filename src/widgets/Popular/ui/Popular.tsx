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
          <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={2.5}>
            <Box gridColumn="span 6">
              <div>
                <a href="">
                  <img className="popular-wrapper" src={p1} alt="" />
                </a>
              </div>
            </Box>
            <Box gridColumn="span 3">
              <a href="">
                <img className="popular-wrapper" src={p2} />
              </a>
            </Box>
            <Box gridColumn="span 3">
              <a href="">
                <img className="popular-wrapper" src={p3} />
              </a>
            </Box>
            <Box gridColumn="span 3">
              <a href="">
                <img className="popular-wrapper" src={p4} />
              </a>
            </Box>
            <Box gridColumn="span 3">
              <a href="">
                <img className="popular-wrapper" src={p5} />
              </a>
            </Box>
            <Box gridColumn="span 6">
              <a href="">
                <img className="popular-wrapper" src={p6} />
              </a>
            </Box>
          </Box>
        </Box>
      </div>
    </div>
  );
};
