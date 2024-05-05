import React, { useRef, useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import "./Card.css";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

const CardComponent = ({ data }) => {
  console.log(data);
  const [opacity, setOpacity] = useState(1);
  const [lineCount, setLineCount] = useState(0);

  useEffect(() => {
    if (lineCount > 5 && opacity === 1) {
      setOpacity(0.2);
    }
  }, [lineCount, opacity]);

  const handleTypographyLoad = () => {
    setLineCount((prevCount) => prevCount + 1);
  };

  return (
    <Card
      style={{ maxWidth: "30%", borderRadius: "30px", marginBottom: "30px" }}
      sx={{ minWidth: 275 }}
    >
      <CardContent>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginBottom: 10,
            padding: 10,
          }}
        >
          <img
            src={data.logoUrl}
            alt="Logo"
            style={{ width: 50, marginRight: 10 }}
          />
          <div>
            <Typography variant="h6" component="div">
              {data.companyName}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {data.jobRole}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {data.location}
            </Typography>
          </div>
        </div>
        <div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <Typography variant="body2" color="text.secondary">
              Estimated Salary: {data.salaryCurrencyCode}{" "}
              {data.minJdSalary ? `${data.minJdSalary} -` : ""}
              {data.maxJdSalary}
              {"k"} &#9989;
            </Typography>
          </div>
        </div>
        <div style={{ position: "relative", padding: "10px" }}>
          <Typography variant="h6" component="div">
            About Company:
          </Typography>

          <Typography variant="body1" component="div">
            About Us
          </Typography>
          <div>
            <Typography
              variant="body2"
              color="text.primary"
              style={{ opacity: opacity }}
              onLoad={handleTypographyLoad}
            >
              {data.jobDetailsFromCompany}
            </Typography>
          </div>
          <Button
            style={{ display: "block", margin: "auto", zIndex: "2" }}
            size="small"
            color="primary"
          >
            View Job
          </Button>
          <div
            style={{
              height: "270px",
              position: "absolute",
              background: "linear-gradient(transparent 20%, white)",
              bottom: 0,
              width: "100%",
            }}
          ></div>
        </div>

        <div>
          <Typography>Minimum Experience</Typography>

          <Typography>{data.minExp ?? "None"}</Typography>
        </div>
      </CardContent>
      <CardActions
        style={{ paddingBottom: 20, paddingLeft: 20, paddingRight: 20 }}
      >
        <Button
          style={{
            width: "100%",
            backgroundColor: "#99f5dc",
            color: "black",
            padding: "10px",
            marginTop: "10px",
          }}
          size="large"
        >
          <Typography>&#9889; Easy Apply</Typography>
        </Button>
      </CardActions>
    </Card>
  );
};

export default CardComponent;
