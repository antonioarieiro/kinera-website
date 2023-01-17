import { useState } from 'react';
import {
    TextField, FormControl, FormLabel, RadioGroup as MuiRadioGroup,
    Radio, Select, MenuItem, InputLabel, TextareaAutosize
} from '@mui/material';

import fundo07 from '../../assets/images/fundo07.png';

const Subscribe = ({ setOpen }) => {
    const [description, setDescription] = useState('');
    const [title, setTitle] = useState('');
    const [image, setImage] = useState('');

    // { name, email, password, gender }: FormValues
    const handleSubmit = () => {
        setOpen(false);
    }

    return (
        <div className="w-full h-[60vh]" style={{
            backgroundImage: `url(${fundo07})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
        }}>
            <div className="w-full h-full bg-[#9d3d9d43] flex items-end py-32 md:px-20 sm:px-10 px-5">
                <div className='flex flex-col gap-10 sm:w-1/2 w-full'>

                    <TextField
                        name="email"
                        label="Email"
                        className='my-2 text-white'
                        variant='standard'
                        sx={{
                            input: { color: 'white' },
                            label: { color: 'white' }
                        }}
                        value={image}
                        onChange={(e) => setImage(e.target.value)}
                    />

                    <div className='w-full'>
                        <button
                            className='px-2 py-1 w-full bg-white hover:bg-gray-100 hover:scale-105 duration-500 text-[#FF0A78] font-bold rounded-md'
                            type='submit'
                            onClick={handleSubmit}
                        >
                            Subscribe
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Subscribe;
