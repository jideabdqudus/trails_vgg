import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';



const CustomCircularProgress =({size}) => {
  
  return (
      <CircularProgress style={{color:"white"}}size={size}/>
  );
}
export default CustomCircularProgress;
