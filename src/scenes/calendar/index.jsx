import {useState} from 'react'
import FullCalendar, {formatDate} from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import listPlugin from '@fullcalendar/list'
import interactionPlugin from '@fullcalendar/interaction'
import {Box, List, ListItem, ListItemText, Typography, useTheme} from '@mui/material'
import Header from '../../components/Header'
import { tokens } from '../../utils/theme'

export default function Calendar() {
	const theme = useTheme()
	const colors = tokens(theme.palette.mode)
	const [currentEvents, setCurrentEvents] = useState([])
	
	const handleDateClick = (selected) => {
		const title = prompt('Please enter a new title for your event')
		const calendarApi = selected.view.calendar
		calendarApi.unselect()

		if (title) {
			calendarApi.addEvent({
				id: `${selected.dateStr}-${selected.title}`,
				title,
				start: selected.startStr,
				end: selected.endStr,
				allDay: selected.allday
			})
		}
	}

	return (
		<div>index</div>
	)	
}
