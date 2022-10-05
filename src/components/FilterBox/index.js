import React, { useState } from "react";
import "./index.css";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/solid";
import {
  FormControlLabel,
  FormGroup,
  Checkbox,
  FormControl,
  Radio,
  RadioGroup,
} from "@mui/material";

function Index({
  MensClothing,
  setMensClothing,
  Jewelery,
  setJewelery,
  Electronics,
  setElectronics,
  PriceRange,
  setPriceRange,
}) {
  const [OpenCategoryDropdown, setOpenCategoryDropdown] = useState(true);
  const [OpenPriceDropdown, setOpenPriceDropdown] = useState(false);
  const [OpenRatingDropdown, setOpenRatingDropdown] = useState(false);

  return (
    <div className="filter-wrapper">
      <div className="dropdown">
        <div
          className="dropdown-title"
          onClick={() => setOpenCategoryDropdown(!OpenCategoryDropdown)}
        >
          <div>dropdown</div>
          {OpenCategoryDropdown ? (
            <ChevronUpIcon style={{ width: "20px", height: "20px" }} />
          ) : (
            <ChevronDownIcon style={{ width: "20px", height: "20px" }} />
          )}
        </div>
        {OpenCategoryDropdown ? (
          <div className="dropdown-checklist">
            <FormGroup>
              <FormControlLabel
                control={
                  <Checkbox
                    style={{
                      margin: "-5px 0px",
                      transform: "scale(0.8)",
                    }}
                    onClick={() => setMensClothing(!MensClothing)}
                  />
                }
                label="Men's Clothing"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    style={{
                      margin: "-5px 0px",
                      transform: "scale(0.8)",
                    }}
                    onClick={() => setJewelery(!Jewelery)}
                  />
                }
                label="Jewelery"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    style={{
                      margin: "-5px 0px",
                      transform: "scale(0.8)",
                    }}
                    onClick={() => setElectronics(!Electronics)}
                  />
                }
                label="Electronics"
              />
            </FormGroup>
          </div>
        ) : (
          <></>
        )}
      </div>
      <div className="hr"></div>
      <div className="dropdown">
        <div
          className="dropdown-title"
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
          <div className="dropdown-checklist">
            <FormControl>
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                value={PriceRange}
                name="radio-buttons-group"
                onChange={(e) => setPriceRange(e.target.value)}
              >
                <FormControlLabel
                  value={20}
                  control={
                    <Radio
                      style={{
                        margin: "-5px 0px",
                        transform: "scale(0.8)",
                      }}
                    />
                  }
                  label="Upto 20$"
                />
                <FormControlLabel
                  value={50}
                  control={
                    <Radio
                      style={{
                        margin: "-5px 0px",
                        transform: "scale(0.8)",
                      }}
                    />
                  }
                  label="Upto 50$"
                />
                <FormControlLabel
                  value={100}
                  control={
                    <Radio
                      style={{
                        margin: "-5px 0px",
                        transform: "scale(0.8)",
                      }}
                    />
                  }
                  label="Upto 100$"
                />
                <FormControlLabel
                  value={1000}
                  control={
                    <Radio
                      style={{
                        margin: "-5px 0px",
                        transform: "scale(0.8)",
                      }}
                    />
                  }
                  label="Upto 1000$"
                />
              </RadioGroup>
            </FormControl>
          </div>
        ) : (
          <></>
        )}
      </div>
      <div className="hr"></div>
      <div className="dropd">
        <div
          className="dropdown-title"
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
          <div className="dropdown-checklist">
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
