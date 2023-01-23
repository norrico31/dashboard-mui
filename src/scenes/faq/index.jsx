import React from 'react'
import { Box, useTheme, Typography } from '@mui/material'
import  Accordion  from '@mui/material/Accordion'
import  AccordionSummary  from '@mui/material/AccordionSummary'
import  AccordionDetails  from '@mui/material/AccordionDetails'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import Header from '../../components/Header'
import { tokens } from '../../utils/theme'

export default function Faq() {
	const theme = useTheme()
  const colors = tokens(theme.palette.mode)
  return (
    <Box m='20px'>
        <Header title='FAQ' subtitle='Frequently Asked Questions Page' />
        <Accordion defaultExpanded>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography color={colors.greenAccent[500]} variant='h5'>An Important question</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae nulla dolore iusto minus facere maxime laboriosam assumenda blanditiis et, eaque asperiores, nam, vero voluptatibus sint. Exercitationem voluptate id iste dolores.e
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion defaultExpanded>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography color={colors.greenAccent[500]} variant='h5'>Another Important question</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae nulla dolore iusto minus facere maxime laboriosam assumenda blanditiis et, eaque asperiores, nam, vero voluptatibus sint. Exercitationem voluptate id iste dolores.e
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion defaultExpanded>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography color={colors.greenAccent[500]} variant='h5'>Your Favorite Questions</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae nulla dolore iusto minus facere maxime laboriosam assumenda blanditiis et, eaque asperiores, nam, vero voluptatibus sint. Exercitationem voluptate id iste dolores.e
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion defaultExpanded>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography color={colors.greenAccent[500]} variant='h5'>Random Questions</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae nulla dolore iusto minus facere maxime laboriosam assumenda blanditiis et, eaque asperiores, nam, vero voluptatibus sint. Exercitationem voluptate id iste dolores.e
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion defaultExpanded>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography color={colors.greenAccent[500]} variant='h5'>Final Questions</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae nulla dolore iusto minus facere maxime laboriosam assumenda blanditiis et, eaque asperiores, nam, vero voluptatibus sint. Exercitationem voluptate id iste dolores.e
            </Typography>
          </AccordionDetails>
        </Accordion>
    </Box>
  )
}
