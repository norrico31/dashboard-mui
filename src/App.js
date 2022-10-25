import { CssBaseline, ThemeProvider } from '@mui/material';
import {ColorModeContext, useMode} from './utils/theme'

function App() {
	const [theme, colorMode] = useMode()
	return (
		<ColorModeContext.Provider value={colorMode}>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				<div className='app'>
					<main className="content"></main>
				</div>
			</ThemeProvider>
		</ColorModeContext.Provider>
	)
}

export default App;

// 36:36 video time