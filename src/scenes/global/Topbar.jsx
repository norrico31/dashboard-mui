import {useContext} from 'react'
import {Box, IconButton, useTheme, InputBase} from '@mui/material'
import {ColorModeContext, tokens} from '../../utils/theme'
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined'
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined'
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined'
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined'
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined'
import SearchIcon from '@mui/icons-material/Search'

const Topbar = () => {
    const theme = useTheme()
    const colors = tokens(theme.palette.mode)
    const {toggleColorMode} = useContext(ColorModeContext)
    return (
        <Box display='flex' justifyContent='space-between'>

        </Box>
    )
}

export default Topbar