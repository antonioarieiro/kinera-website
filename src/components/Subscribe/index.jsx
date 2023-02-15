import { useState } from 'react';
import {
    TextField, FormControl, FormLabel, RadioGroup as MuiRadioGroup,
    Radio, Select, MenuItem, InputLabel, TextareaAutosize
} from '@mui/material';

import fundo07 from '../../assets/images/fundo07.png';

const Subscribe = (props) => {
    const { setOpenModal, openModal } = props;
    const [description, setDescription] = useState('');
    const [title, setTitle] = useState('');
    const [image, setImage] = useState('');

    // { name, email, password, gender }: FormValues
    const handleSubmit = () => {
        setOpenModal(false);
        alert('Subscribed')
    }

    return (
        <div className="w-full h-[60vh] bg-white" style={{
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
            <div className="w-full h-full bg-[#9d3d9d43] flex items-end py-32 md:px-20 sm:px-10 px-5">
                <div className='flex flex-col gap-10 sm:w-1/2 w-full'>

                <TextField
                        name="email"
                        label="e-mail"  
                        className="my-2 text-white"
                        variant="standard"
                        sx={{
                            input: { color: "white", fontSize: "1.2rem", fontWeight: 500, paddingLeft: '15px' },
                            label: { color: "white", fontSize: "1.2rem", fontWeight: 800, paddingLeft: '15px' },
                            "& .MuiInputBase-root": {
                                border: "2px solid white",
                                boxShadow: "0 0 10px rgba(255,255,255,0.3)",
                            },
                        }}
                        value={image}
                        onChange={(e) => setImage(e.target.value)}
                    />

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
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Subscribe;