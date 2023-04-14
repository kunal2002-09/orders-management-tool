import { Box, Typography } from "@mui/material";

const Header=()=>{
return(
    <>
    <Box sx={{height:'80px',display:'flex',justifyContent:'flex-start',padding:'10px'}} >
        <Typography variant="h3" sx={{color:'#000000ab'}}>
        Order Management Tool
        </Typography>
    </Box>
    </>
)
}
export default Header;