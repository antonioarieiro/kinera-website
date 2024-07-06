import React, { useState } from 'react';
import {
    TextField, FormControl, FormLabel, RadioGroup as MuiRadioGroup,
    Radio, Select, MenuItem, InputLabel, FormControlLabel
} from '@mui/material';
import countries from 'countries-list';
import axios from 'axios';
import fundo07 from "../../assets/images/kinera-banner2.png";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const NewsletterPage = () => {
  const [videosToWeb3, setVideosToWeb3] = useState(false);
  const [participate, setParticipate] = useState(false);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [website, setWebsite] = useState("");
  const [wallet, setWallet] = useState("");
  const [nationality, setNationality] = useState("");
  const serverUlr = "https://mail.kinera.network";
  const theme = createTheme({
    components: {
      MuiInputLabel: {
        styleOverrides: {
          root: {
            color: "black",
            fontSize: "1.2rem",
            fontWeight: 800
          }
        }
      }
    }
  });

  const countryOptions = Object.keys(countries.countries).map((code) => (
    <MenuItem key={code} value={code}>
      {countries.countries[code].name}
    </MenuItem>
  ));

  const validateEmail = (email) => {
    const re =
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  };

  const handleSubmit = async () => {
    if (!validateEmail(email)) {
      alert("Please enter a valid email address.");
      return;
    }
    const data = {
      email: email,
      name: name,
      videosToWeb3: videosToWeb3,
      participate: participate,
      nationality: nationality,
      website: website,
      wallet: wallet
    };

    try {
      const response = await axios.post(serverUlr, data, {
        headers: {
          "Content-Type": "application/json"
        }
      });
      console.log(response.data);
      alert(response.data);
    } catch (error) {
      console.error(error);
      alert(
        "An error occurred while submitting the form, check if your e-mail is correct"
      );
    }
  };

  return (
    <div className="newslleter-container">
      <div className="newsletter-form">
        <div className="w-full   flex items-center justify-center px-5">
          <div className="flex flex-col gap-10 sm:w-1/1 w-full form-card">
            <TextField
              name="name"
              label="Name"
              className="my-2 text-black"
              variant="standard"
              value={name}
              onChange={(e) => setName(e.target.value)}
              sx={{
                input: {
                  color: "black",
                  fontSize: "1.2rem",
                  fontWeight: 300,
                  paddingLeft: "15px",
                  fontFamily: "Poppins, sans-serif"
                },
                label: {
                  color: "black",
                  fontSize: "1.2rem",
                  fontWeight: 500,
                  paddingLeft: "15px",
                  fontFamily: "Poppins, sans-serif"
                },
                "& .MuiInputBase-root": {
                  border: "2px solid white",
                  boxShadow: "0 0 10px rgba(255,255,255,0.3)"
                }
              }}
              style={{ marginBottom: "10px" }}
            />
            <TextField
              name="email"
              label="e-mail"
              className="my-2 text-black"
              variant="standard"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              sx={{
                input: {
                  color: "black",
                  fontSize: "1.2rem",
                  fontWeight: 300,
                  paddingLeft: "15px",
                  fontFamily: "Poppins, sans-serif"
                },
                label: {
                  color: "black",
                  fontSize: "1.2rem",
                  fontWeight: 500,
                  paddingLeft: "15px",
                  fontFamily: "Poppins, sans-serif"
                },
                "& .MuiInputBase-root": {
                  border: "2px solid white",
                  boxShadow: "0 0 10px rgba(255,255,255,0.3)"
                }
              }}
              style={{ marginTop: "-15px", marginBottom: "-10px" }}
            />
            <ThemeProvider theme={theme}>
              <FormControl
                variant="standard"
                sx={{ width: "100%", marginBottom: "-25px" }}
              >
                <InputLabel
                  id="nationality-label"
                  sx={{
                    color: "black",
                    fontSize: "1.2rem",
                    fontFamily: "Poppins, sans-serif",
                    fontWeight: 500,
                    position: "absolute",
                    left: "15px",
                    top: 0,
                    "&.Mui-focused": {
                      top: "-10px",
                      fontSize: "1rem"
                    },
                    "&.MuiInputLabel-shrink": {
                      top: "-0px",
                      fontSize: "1rem"
                    }
                  }}
                  shrink={nationality !== ""}
                >
                  Nationality
                </InputLabel>
                <Select
                  labelId="nationality-label"
                  id="nationality"
                  value={nationality}
                  onChange={(e) => setNationality(e.target.value)}
                  label="Nationality"
                  sx={{
                    "& .MuiSelect-select": {
                      color: "black",
                      fontSize: "1.2rem",
                      fontWeight: 300,
                      padding: "4px",
                      border: "2px solid white",
                      boxShadow: "0 0 10px rgba(255,255,255,0.3)",
                      borderRadius: "1px",
                      "&:focus": {
                        backgroundColor: "transparent",
                        borderRadius: "5px",
                        borderColor: "#ffffff !important"
                      }
                    },
                    "& .MuiOutlinedInput-notchedOutline": {
                      border: "2px solid white"
                    },
                    "& .MuiSvgIcon-root": {
                      color: "black"
                    }
                  }}
                >
                  {countryOptions}
                </Select>
              </FormControl>
            </ThemeProvider>
            <p
              style={{
                color: "black",
                fontSize: "1.5rem",
                fontWeight: 400,
                fontFamily: "Poppins, sans-serif",
                marginTop: "15px"
              }}
            >
              {" "}
              Are you a video or cinema creator in any form?{" "}
            </p>
            <TextField
              name="website"
              label="Website"
              className="my-2 text-black"
              variant="standard"
              value={website}
              onChange={(e) => setWebsite(e.target.value)}
              sx={{
                input: {
                  color: "black",
                  fontSize: "1.2rem",
                  fontWeight: 300,
                  paddingLeft: "15px",
                  fontFamily: "Poppins, sans-serif"
                },
                label: {
                  color: "black",
                  fontSize: "1.2rem",
                  fontWeight: 500,
                  paddingLeft: "15px",
                  fontFamily: "Poppins, sans-serif"
                },
                "& .MuiInputBase-root": {
                  border: "2px solid white",
                  boxShadow: "0 0 10px rgba(255,255,255,0.3)"
                }
              }}
              style={{ marginTop: "-47px" }}
            />
            <FormControl component="fieldset">
              <FormLabel
                component="legend"
                style={{
                  color: "#000",
                  fontSize: "1.5rem",
                  fontWeight: 400,
                  fontFamily: "Poppins, sans-serif"
                }}
              >
                Do you want to test Kinera features before they are released?
              </FormLabel>
              <MuiRadioGroup
                row
                aria-label="videosToWeb3"
                name="videosToWeb3"
                value={videosToWeb3.toString()}
                onChange={(e) => setVideosToWeb3(e.target.value === "true")}
              >
                <FormControlLabel
                  value={"true"}
                  control={<Radio sx={{ color: "#000" }} />}
                  label="Yes"
                  sx={{ color: "#000" }}
                />
                <FormControlLabel
                  value={"false"}
                  control={<Radio sx={{ color: "#000" }} />}
                  label="No"
                  sx={{ color: "#000" }}
                />
              </MuiRadioGroup>
            </FormControl>
            <p
              style={{
                color: "black",
                fontSize: "1.5rem",
                marginTop: "-20px",
                fontWeight: 400,
                fontFamily: "Poppins, sans-serif"
              }}
            >
              {" "}
              Do you have a polkadot wallet?{" "}
            </p>
            <TextField
              name="wallet"
              label="Polkadot wallet address"
              className="my-2 text-black"
              variant="standard"
              value={wallet}
              onChange={(e) => setWallet(e.target.value)}
              sx={{
                input: {
                  color: "black",
                  fontSize: "1.2rem",
                  fontWeight: 300,
                  paddingLeft: "15px",
                  fontFamily: "Poppins, sans-serif"
                },
                label: {
                  color: "black",
                  fontSize: "1.2rem",
                  fontWeight: 500,
                  paddingLeft: "15px",
                  fontFamily: "Poppins, sans-serif"
                },
                "& .MuiInputBase-root": {
                  border: "2px solid white",
                  boxShadow: "0 0 10px rgba(255,255,255,0.3)"
                }
              }}
              style={{ marginTop: "-47px" }}
            />
            <FormControl component="fieldset">
              <FormLabel
                component="legend"
                style={{
                  color: "black",
                  fontSize: "1.5rem",
                  fontWeight: 400,
                  fontFamily: "Poppins, sans-serif"
                }}
              >
                Do you want to become a Kinera Ambassador?
              </FormLabel>
              <MuiRadioGroup
                row
                aria-label="participate"
                name="participate"
                value={participate.toString()}
                onChange={(e) => setParticipate(e.target.value === "true")}
              >
                <FormControlLabel
                  value={"true"}
                  control={<Radio sx={{ color: "#000" }} />}
                  label="Yes"
                  sx={{ color: "#000" }}
                />
                <FormControlLabel
                  value={"false"}
                  control={<Radio sx={{ color: "#000" }} />}
                  label="No"
                  sx={{ color: "#000" }}
                />
              </MuiRadioGroup>
            </FormControl>

            <div className="w-full flex ">
              <button
                className="action-button"
                type="submit"
                onClick={handleSubmit}
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsletterPage;