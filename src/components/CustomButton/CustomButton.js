import React from 'react';
import { Button } from '@material-ui/core';
import CustomCircularProgress from '../Loader/CustomCircularProgress';


const CustomButton = ({ content, onClick, loading }) => {


    return (
        <Button
            size="large"
            variant="contained"
            color="primary"
            disabled={loading}
            startIcon={
                loading && <CustomCircularProgress  size={20}/>
            }
            onClick={onClick}
            style={{
                backgroundColor: "#53D1BE",
                color: "white",
                borderRadius: "2rem",
                textTransform: "none",
                boxShadow: "none",
                float: "right",
            }}
        >
            {content}
        </Button>
    )
}
export default CustomButton;