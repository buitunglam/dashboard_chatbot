import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { borderRadius } from '@mui/system';

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
    borderRadius: "10px",
};

interface ModalProps {
    open: boolean;
    handleOpen: () => void;
    handleClose: () => void;
}

const DialogDelete = ({ open, handleOpen, handleClose }: ModalProps) => {
    React.useEffect(() => {
        console.log("open modal --->", open)
    }, [open])
    return (
        <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            open={open}
            onClose={handleClose}
            closeAfterTransition
            slots={{ backdrop: Backdrop }}
            slotProps={{
                backdrop: {
                    timeout: 500,
                },
            }}
        >
            <Fade in={open}>
                <Box sx={style} className="flex flex-col items-center justify-center">
                    <Typography id="transition-modal-title" variant="h6" component="h2">
                       Do you want to remove
                    </Typography>
                    {/* <Typography id="transition-modal-description" sx={{ mt: 2 }}>
                        Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                    </Typography> */}
                    <Box className="flex w-full justify-between items-center py-[10px] mt-[20px]">
                        <Button variant="contained" className='w-[45%]'>
                            Edit
                        </Button>
                        <Button onClick={handleClose} variant="contained" color="error" className='w-[45%]'>
                            Delete
                        </Button>
                    </Box>
                </Box>
            </Fade>
        </Modal>
    );
}

export default DialogDelete