import { Dialog, DialogTitle, DialogContent, Typography } from '@mui/material';
import { Button as MuiButton } from '@mui/material';
import { IoMdClose } from 'react-icons/io';

/*
<DialogTitle>
                <div className='flex justify-between items-center'>
                    <Typography variant="h6" component="div">
                        <h1 className='font-bold text-black'>{title}</h1>
                    </Typography>
                    
                    <MuiButton
                        color="error"
                        onClick={ () => {setOpen(false)} }
                    >
                        <IoMdClose className='text-[#000]' size={30} />
                    </MuiButton>
                </div>
            </DialogTitle>
*/

const Modal = (props) => {

    const { title, children, maxWidth, open, setOpen } = props;

    return (
        <Dialog open={open} fullWidth maxWidth={maxWidth === undefined ? 'sm' : maxWidth}>
            <DialogContent dividers>
                {children}
            </DialogContent>
        </Dialog>
    )
}

export default Modal;