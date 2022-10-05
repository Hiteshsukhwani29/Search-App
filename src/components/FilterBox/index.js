import React, { useState } from "react";
import "./index.css";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/solid";
import { FormControlLabel, FormGroup, Checkbox } from "@mui/material";

function Index() {
  const [checked, setChecked] = useState(true);
  const [OpenCategoryDropdown, setOpenCategoryDropdown] = useState(true);
  const [OpenPriceDropdown, setOpenPriceDropdown] = useState(false);
  const [OpenRatingDropdown, setOpenRatingDropdown] = useState(false);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };
  return (
    <div>
      <div className="category">
        <div
          className="category-title"
          onClick={() => setOpenCategoryDropdown(!OpenCategoryDropdown)}
        >
          <div>Category</div>
          {OpenCategoryDropdown ? (
            <ChevronUpIcon style={{ width: "20px", height: "20px" }} />
          ) : (
            <ChevronDownIcon style={{ width: "20px", height: "20px" }} />
          )}
        </div>
        {OpenCategoryDropdown ? (
          <div className="category-checklist">
            <FormGroup>
              <FormControlLabel
                control={
                  <Checkbox
                    defaultChecked
                    style={{
                      margin: "-5px 0px",
                      transform: "scale(0.8)",
                    }}
                  />
                }
                label="Label"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    defaultChecked
                    style={{
                      margin: "-5px 0px",
                      transform: "scale(0.8)",
                    }}
                  />
                }
                label="Label"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    defaultChecked
                    style={{
                      margin: "-5px 0px",
                      transform: "scale(0.8)",
                    }}
                  />
                }
                label="Label"
              />
            </FormGroup>
          </div>
        ) : (
          <></>
        )}
      </div>
      <div className="hr"></div>
      <div className="category">
        <div
          className="category-title"
          onClick={() => setOpenPriceDropdown(!OpenPriceDropdown)}
        >
          <div>Price Range</div>
          {OpenPriceDropdown ? (
            <ChevronUpIcon style={{ width: "20px", height: "20px" }} />
          ) : (
            <ChevronDownIcon style={{ width: "20px", height: "20px" }} />
          )}
        </div>
        {OpenPriceDropdown ? (
          <div className="category-checklist">
            <FormGroup>
              <FormControlLabel
                control={
                  <Checkbox
                    defaultChecked
                    style={{
                      margin: "-5px 0px",
                      transform: "scale(0.8)",
                    }}
                  />
                }
                label="Label"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    defaultChecked
                    style={{
                      margin: "-5px 0px",
                      transform: "scale(0.8)",
                    }}
                  />
                }
                label="Label"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    defaultChecked
                    style={{
                      margin: "-5px 0px",
                      transform: "scale(0.8)",
                    }}
                  />
                }
                label="Label"
              />
            </FormGroup>
          </div>
        ) : (
          <></>
        )}
      </div>
      <div className="hr"></div>
      <div className="category">
        <div
          className="category-title"
          onClick={() => setOpenRatingDropdown(!OpenRatingDropdown)}
        >
          <div>Ratings</div>
          {OpenRatingDropdown ? (
            <ChevronUpIcon style={{ width: "20px", height: "20px" }} />
          ) : (
            <ChevronDownIcon style={{ width: "20px", height: "20px" }} />
          )}{" "}
        </div>
        {OpenRatingDropdown ? (
          <div className="category-checklist">
            <FormGroup>
              <FormControlLabel
                control={
                  <Checkbox
                    defaultChecked
                    style={{
                      margin: "-5px 0px",
                      transform: "scale(0.8)",
                    }}
                  />
                }
                label="Label"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    defaultChecked
                    style={{
                      margin: "-5px 0px",
                      transform: "scale(0.8)",
                    }}
                  />
                }
                label="Label"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    defaultChecked
                    style={{
                      margin: "-5px 0px",
                      transform: "scale(0.8)",
                    }}
                  />
                }
                label="Label"
              />
            </FormGroup>
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}

export default Index;
