import { Typography, Box, useTheme } from "@mui/material"
import {tokens} from '../utils/theme'

const Header = ({title, subtitle}) => {
    const {palette: {mode}} = useTheme()
    const colors = tokens(mode)
    return (
        <Box mb='30px'>
            <Typography variant='h2' color={colors.grey[100]} fontWeight='bold' sx={{mb: '5px'}}>{title}</Typography>
            <Typography variant='h2' color={colors.greenAccent[400]}>{subtitle}</Typography>
        </Box>
    )
}

export default Header