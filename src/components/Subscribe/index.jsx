import { useState } from 'react';

import {
    TextField, FormControl, FormLabel, RadioGroup as MuiRadioGroup,
    Radio, Select, MenuItem, InputLabel, TextareaAutosize, FormControlLabel
} from '@mui/material';
import countries from 'countries-list';
import axios from 'axios';

import fundo07 from '../../assets/images/fundo07.png';

import { createTheme, ThemeProvider } from '@mui/material/styles';

const Subscribe = (props) => {
    const { setOpenModal, openModal } = props;
    const [wantToBeYouTuber, setWantToBeYouTuber] = useState(false);
    const [alreadyYouTuber, setAlreadyYouTuber] = useState(false);
    const [pickVideos, setPickVideos] = useState(false);
    const [createTelevision, setCreateTelevision] = useState(false);
    const [participate, setParticipate] = useState(false);
    const [receiveInformation, setReceiveInformation] = useState(false);
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
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
        console.log('dsadsasadsdadsasda:', serverUlr);
        if (!validateEmail(email)) {
            alert('Please enter a valid email address.');
            return;
        }
        setOpenModal(false);
        const data = {
            email: email,
            name: name,
            wantToBeYouTuber: wantToBeYouTuber,
            alreadyYouTuber: alreadyYouTuber,
            pickVideos: pickVideos,
            createTelevision: createTelevision,
            participate: participate,
            receiveInformation: receiveInformation,
            nationality: nationality,
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
        <div className="w-full h-auto bg-white" style={{
            backgroundImage: `url(${fundo07})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            position: 'absolute',
            zIndex: '50',
            margin: 'auto',
            marginTop: '0% auto auto',
            width: '83%',
        }}>
            <div className="w-full h-auto bg-[#9d3d9d43] flex items-end py-32 md:px-20 sm:px-10 px-5">
                <div className='flex flex-col gap-10 sm:w-1/1 w-full'>

        
                <TextField
                        name="name"
                        label="Name"  
                        className="my-2 text-white"
                        variant="standard"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        sx={{
                            input: { color: "white", fontSize: "1.2rem", fontWeight: 500, paddingLeft: '15px' },
                            label: { color: "white", fontSize: "1.2rem", fontWeight: 800, paddingLeft: '15px' },
                            "& .MuiInputBase-root": {
                                border: "2px solid white",
                                boxShadow: "0 0 10px rgba(255,255,255,0.3)",
                            },
                        }}
                />

                <TextField
                        name="email"
                        label="e-mail"  
                        className="my-2 text-white"
                        variant="standard"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        sx={{
                            input: { color: "white", fontSize: "1.2rem", fontWeight: 500, paddingLeft: '15px' },
                            label: { color: "white", fontSize: "1.2rem", fontWeight: 800, paddingLeft: '15px' },
                            "& .MuiInputBase-root": {
                                border: "2px solid white",
                                boxShadow: "0 0 10px rgba(255,255,255,0.3)",
                            },
                        }}
                />
                    <ThemeProvider theme={theme}>
                    <FormControl>
                    <InputLabel id="nationality-label">Nationality</InputLabel>
                    <Select
                        labelId="nationality-label"
                        id="nationality"
                        value={nationality}
                        onChange={(e) => setNationality(e.target.value)}
                        label="Nationality"
                        sx={{ 
                            width: '100%',  
                            '& .MuiInputLabel-root': { 
                                color: 'white', 
                            }, 
                            '& .MuiSelect-select': { 
                                color: 'white', 
                                fontSize: '1.2rem', 
                                fontWeight: 500, 
                                paddingLeft: '15px', 
                                border: '2px solid white', 
                                boxShadow: '0 0 10px rgba(255,255,255,0.3)',
                                borderRadius: '5px',
                                '&:focus': { 
                                    backgroundColor: 'transparent',
                                    borderRadius: '5px',
                                    borderColor: '#ffffff !important'
                                } 
                            }, 
                            '& .MuiOutlinedInput-notchedOutline': { 
                                border: '2px solid white' 
                            },
                            "& .MuiSvgIcon-root": {
                                color: "white",},
                            
                        }}
                    >
                        {countryOptions}
                    </Select>
                    </FormControl>
                    </ThemeProvider>

                    <FormControl component="fieldset">
                        <FormLabel component="legend" style={{ color: 'white', fontSize: '1.5rem'  }}>I want to be a YouTuber, a video or a cinema professional.</FormLabel>
                        <MuiRadioGroup row aria-label="wantToBeYouTuber" name="wantToBeYouTuber" value={wantToBeYouTuber.toString()} onChange={(e) => setWantToBeYouTuber(e.target.value === 'true')}>
                            <FormControlLabel value={'true'} control={<Radio sx={{ color: "#FF0084" }}  />} label="Yes"  />
                            <FormControlLabel value={'false'} control={<Radio sx={{ color: "#FF0084" }} />} label="No" />
                        </MuiRadioGroup>
                    </FormControl>

                    <FormControl component="fieldset">
                        <FormLabel component="legend" style={{ color: 'white', fontSize: '1.5rem'  }}>I'm already a YouTuber, a video or cinema professional.</FormLabel>
                        <MuiRadioGroup row aria-label="alreadyYouTuber" name="alreadyYouTuber" value={alreadyYouTuber.toString()} onChange={(e) => setAlreadyYouTuber(e.target.value === 'true')}>
                            <FormControlLabel value={'true'} control={<Radio sx={{ color: "#FF0084" }}  />} label="Yes"  />
                            <FormControlLabel value={'false'} control={<Radio sx={{ color: "#FF0084" }} />} label="No" />
                        </MuiRadioGroup>
                    </FormControl>

                    <FormControl component="fieldset">
                        <FormLabel component="legend" style={{ color: 'white', fontSize: '1.5rem'  }}>I want to pick videos from youtube or TikTok and organize competitions with them.</FormLabel>
                        <MuiRadioGroup row aria-label="pickVideos" name="pickVideos" value={pickVideos.toString()} onChange={(e) => setPickVideos(e.target.value === 'true')}>
                            <FormControlLabel value={'true'} control={<Radio sx={{ color: "#FF0084" }}  />} label="Yes"  />
                            <FormControlLabel value={'false'} control={<Radio sx={{ color: "#FF0084" }} />} label="No" />
                        </MuiRadioGroup>
                    </FormControl>

                    <FormControl component="fieldset">
                        <FormLabel component="legend" style={{ color: 'white', fontSize: '1.5rem'  }}>I want to create television channels from lists with the best videos.</FormLabel>
                        <MuiRadioGroup row aria-label="createTelevision" name="createTelevision" value={createTelevision.toString()} onChange={(e) => setCreateTelevision(e.target.value === 'true')}>
                            <FormControlLabel value={'true'} control={<Radio sx={{ color: "#FF0084" }}  />} label="Yes"  />
                            <FormControlLabel value={'false'} control={<Radio sx={{ color: "#FF0084" }} />} label="No" />
                        </MuiRadioGroup>
                    </FormControl>

                    <FormControl component="fieldset">
                        <FormLabel component="legend" style={{ color: 'white', fontSize: '1.5rem'  }}>I want to participate in the funding rounds of this project.</FormLabel>
                        <MuiRadioGroup row aria-label="participate" name="participate" value={participate.toString()} onChange={(e) => setParticipate(e.target.value === 'true')}>
                            <FormControlLabel value={'true'} control={<Radio sx={{ color: "#FF0084" }}  />} label="Yes"  />
                            <FormControlLabel value={'false'} control={<Radio sx={{ color: "#FF0084" }} />} label="No" />
                        </MuiRadioGroup>
                    </FormControl>

                    <FormControl component="fieldset">
                        <FormLabel component="legend" style={{ color: 'white', fontSize: '1.5rem'  }}>I want to receive information about the project.</FormLabel>
                        <MuiRadioGroup row aria-label="receiveInformation" name="receiveInformation" value={receiveInformation.toString()} onChange={(e) => setReceiveInformation(e.target.value === 'true')}>
                            <FormControlLabel value={'true'} control={<Radio sx={{ color: "#FF0084" }}  />} label="Yes"  />
                            <FormControlLabel value={'false'} control={<Radio sx={{ color: "#FF0084" }} />} label="No" />
                        </MuiRadioGroup>
                    </FormControl>
                    <br></br>
                    <div className='w-full flex justify-between'>
                        <button
                            className='px-2 py-1 w-2/5 bg-white hover:bg-gray-100 hover:scale-105 duration-500 text-[#FF0A78] font-bold rounded-md'
                            type='submit'
                            onClick={handleSubmit}
                        >
                            Subscribe
                        </button>
                        <button
                            className='px-2 py-1 w-2/5 bg-white hover:bg-gray-100 hover:scale-105 duration-500 text-[#FF0A78] font-bold rounded-md'
                            onClick={() => { setOpenModal(!openModal) }}
                        >
                            Cancel
                        </button>
                        <div style={{
                            backgroundColor: 'rgba(0, 0, 0, 0.7)',
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100%',
                            zIndex: -5,
                        }} />
                    </div>
                </div>      
            </div>
        </div>
    );
}

export default Subscribe;
