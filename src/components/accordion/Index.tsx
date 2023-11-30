import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

interface PropsAcordion {
    id: string;
    title: string;
    image?: string;
    text: string;
    style:string;
    styleImage?: string;
}

export default function AcordionComponent( {id, title, image, text, style, styleImage}:PropsAcordion ) {
    return (
        <>
            <Accordion className={style}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls={id}
                    id={id}
                >
                    <Typography className='flex font-bold'> <img src={image} alt="" className={styleImage} /> {title} </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        {text}
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </>
    )
}