import React, { useState } from "react";
import "./index.css";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/solid";
import {
  FormControlLabel,
  FormGroup,
  Checkbox,
  FormControl,
  Radio,
  FormLabel,
  RadioGroup,
} from "@mui/material";

function Index({
  MensClothing,
  setMensClothing,
  Jewelery,
  setJewelery,
  Electronics,
  setElectronics,
  WomenClothing,
  setWomenClothing,
  PriceRange,
  setPriceRange,
}) {
  const [checked, setChecked] = useState(true);
  const [OpenCategoryDropdown, setOpenCategoryDropdown] = useState(true);
  const [OpenPriceDropdown, setOpenPriceDropdown] = useState(false);
  const [OpenRatingDropdown, setOpenRatingDropdown] = useState(false);

  return (
    <div className="filter-wrapper">
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
            {/* <FormGroup>
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
            </FormGroup> */}
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
