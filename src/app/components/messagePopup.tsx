import React from 'react';
import Alert from '@mui/material/Alert';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';


export default function MessagePopup() {
    const [open, setOpen] = React.useState(true);

    const message = (
        <Alert
            icon={false}
            severity = "info"
            onClose = {() => {
                setOpen(false);
            }}>
            This is an encouraging message.
        </Alert>
    );

    return (
    <Collapse in={open}>
        {message}
    </Collapse>
    );
}