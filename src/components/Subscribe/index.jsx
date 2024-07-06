import { useState } from 'react';

import {
    TextField, FormControl, FormLabel, RadioGroup as MuiRadioGroup,
    Radio, Select, MenuItem, InputLabel, TextareaAutosize, FormControlLabel
} from '@mui/material';
import countries from 'countries-list';
import axios from 'axios';

import fundo07 from '../../assets/images/fundo07.webp';

import { createTheme, ThemeProvider } from '@mui/material/styles';

const Subscribe = (props) => {
    const { setOpenModal, openModal } = props;
    const [videosToWeb3, setVideosToWeb3] = useState(false);
    const [participate, setParticipate] = useState(false);
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [website, setWebsite] = useState('');
    const [wallet, setWallet] = useState('');
    const [nationality, setNationality] = useState('');
    const serverUlr = 'https://mail.kinera.network'
    const theme = createTheme({
        components: {
            MuiInputLabel: {
                styleOverrides: {
                    root: {
                        color: 'white',
                        fontSize: '1.2rem',
                        fontWeight: 800, // Changed from 500 to 800 for bold
                    },
                },
            },
        },
    });

    const countryOptions = Object.keys(countries.countries).map((code) => (
        <MenuItem key={code} value={code}>
            {countries.countries[code].name}
        </MenuItem>
    ));

    const validateEmail = (email) => {
        // regex pattern for email validation according to RFC 5322
        const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    };

    const handleSubmit = async () => {
        // validate email before submitting the form
        console.log('working!:', serverUlr);
        if (!validateEmail(email)) {
            alert('Please enter a valid email address.');
            return;
        }
        setOpenModal(false);
        const data = {
            email: email,
            name: name,
            videosToWeb3: videosToWeb3, //If you had a way to earn tokens, would you move your videos to a web3 environment?
            participate: participate, //Would you want to become a Kinera Ambassador?
            nationality: nationality, 
            website: website,
            wallet: wallet
        };
        
        try {
        
            const response = await axios.post(serverUlr, data, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            console.log(response.data);
            alert(response.data);
        } catch (error) {
            console.error(error);
            alert('An error occurred while submitting the form, check if your e-mail is correct');
        }
    };


    return (
      <div
        className="w-full h-auto bg-white"
        style={{
          backgroundImage: `url(${fundo07})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          position: "absolute",
          zIndex: "50",
          margin: "auto",
          marginTop: "0% auto auto",
          width: "83%"
        }}
      >
        <div className="w-full h-auto bg-[#9d3d9d43] flex items-end py-32 md:px-20 sm:px-10 px-5">
          <div className="flex flex-col gap-10 sm:w-1/1 w-full">
            <TextField
              name="name"
              label="Name"
              className="my-2 text-white"
              variant="standard"
              value={name}
              onChange={(e) => setName(e.target.value)}
              sx={{
                input: {
                  color: "white",
                  fontSize: "1.2rem",
                  fontWeight: 300,
                  paddingLeft: "15px",
                  fontFamily: "Poppins, sans-serif"
                },
                label: {
                  color: "pink",
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
              className="my-2 text-white"
              variant="standard"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              sx={{
                input: {
                  color: "white",
                  fontSize: "1.2rem",
                  fontWeight: 300,
                  paddingLeft: "15px",
                  fontFamily: "Poppins, sans-serif"
                },
                label: {
                  color: "pink",
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
                    color: "pink",
                    fontSize: "1.2rem",
                    fontFamily: "Poppins, sans-serif",
                    fontWeight: 500,
                    position: "absolute", // Position it absolutely within the FormControl
                    left: "15px",
                    top: 0, // Adjust for standard variant
                    "&.Mui-focused": {
                      // Styles when the input is focused
                      top: "-10px",
                      fontSize: "1rem" // Smaller size when lifted
                    },
                    "&.MuiInputLabel-shrink": {
                      // Styles when the label is shrunk
                      top: "-0px",
                      fontSize: "1rem" // Smaller size when lifted
                    }
                  }}
                  shrink={nationality !== ""} // Shrink label when there is a value
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
                      color: "white",
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
                      color: "white"
                    }
                  }}
                >
                  {countryOptions}
                </Select>
              </FormControl>
            </ThemeProvider>

            <p
              style={{
                color: "white",
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
              className="my-2 text-white"
              variant="standard"
              value={website}
              onChange={(e) => setWebsite(e.target.value)}
              sx={{
                input: {
                  color: "white",
                  fontSize: "1.2rem",
                  fontWeight: 300,
                  paddingLeft: "15px",
                  fontFamily: "Poppins, sans-serif"
                },
                label: {
                  color: "pink",
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
                  color: "white",
                  fontSize: "1.5rem",
                  fontWeight: 400,
                  fontFamily: "Poppins, sans-serif"
                }}
              >
                Do you want to be a test or become a Kinera tester?
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
                  control={<Radio sx={{ color: "#FF0084" }} />}
                  label="Yes"
                />
                <FormControlLabel
                  value={"false"}
                  control={<Radio sx={{ color: "#FF0084" }} />}
                  label="No"
                />
              </MuiRadioGroup>
            </FormControl>

            <p
              style={{
                color: "white",
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
              className="my-2 text-white"
              variant="standard"
              value={wallet}
              onChange={(e) => setWallet(e.target.value)}
              sx={{
                input: {
                  color: "white",
                  fontSize: "1.2rem",
                  fontWeight: 300,
                  paddingLeft: "15px",
                  fontFamily: "Poppins, sans-serif"
                },
                label: {
                  color: "pink",
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
                  color: "white",
                  fontSize: "1.5rem",
                  fontWeight: 400,
                  fontFamily: "Poppins, sans-serif"
                }}
              >
                Would you want to become a Kinera Ambassador?
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
                  control={<Radio sx={{ color: "#FF0084" }} />}
                  label="Yes"
                />
                <FormControlLabel
                  value={"false"}
                  control={<Radio sx={{ color: "#FF0084" }} />}
                  label="No"
                />
              </MuiRadioGroup>
            </FormControl>

            <br></br>
            <div className="w-full flex justify-between">
              <button
                className="px-2 py-4 w-2/5 bg-white hover:bg-gray-100 hover:scale-105 duration-500 text-[#FF0A78] font-bold rounded-md"
                type="submit"
                onClick={handleSubmit}
              >
                Subscribe
              </button>
              <button
                className="px-2 py-1 w-2/5 bg-white hover:bg-gray-100 hover:scale-105 duration-500 text-[#FF0A78] font-bold rounded-md"
                onClick={() => {
                  setOpenModal(!openModal);
                }}
              >
                Cancel
              </button>
              <div
                style={{
                  backgroundColor: "rgba(0, 0, 0, 0.7)",
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  zIndex: -5
                }}
              />
            </div>
          </div>
        </div>
      </div>
    );
}

export default Subscribe;
