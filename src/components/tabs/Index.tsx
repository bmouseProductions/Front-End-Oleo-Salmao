import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import fileIcon from '../../assets/file.svg';
import patense from '../../assets/patense.png'

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function FileIcon(){
  return (
    <img src={fileIcon} alt=""  className='w-5'/>
  )
}


function PatenseIcon(){
  return (
    <img src={patense} alt=""  className=' w-7'/>
  )
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

export default function VerticalTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex',}}
      className='rounded lg:max-w-[750px] h-[315px]'
    >
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{ borderRight: 1, borderColor: 'divider' }}
        className='flex'
      >
        <Tab icon={ <FileIcon /> } label="Nossa História" {...a11yProps(0)} />
        <Tab icon= { <PatenseIcon /> } label="Grupo Patense" {...a11yProps(1)} />
      </Tabs>
      <TabPanel value={value} index={0} >
        Fundada no ano de 1970 por Antônio Gonçalves, a empresa iniciou os seus trabalhos em Patos de Minas ainda de maneira arcaica. Um simples açougueiro da cidade percebeu que existia um mercado muito diferente que agregaria muito para o planeta no que tange sustentabilidade e valores. Nosso projeto é coletar subprodutos animais que antes eram destinados de forma incorreta ao meio ambiente e agregar valor a eles, produzindo proteínas, gorduras e novas matérias-primas para diversos setores da economia nacional.
      </TabPanel>
      <TabPanel value={value} index={1}>
        Hoje o Grupo conta com as empresas Patense, Farol, Pets Mellon, Originalis e BioSea, que agregam ao grupo tanto valor quanto agregam à nossa biodiversidade. O Grupo Patense contempla mais de 52 anos de história no mercado de rendering, a dedicação e a qualidade entregues aos seus parceiros ao longo desse tempo conferem credibilidade e confiança para todo o grupo. Suas empresas estão localizadas por todo o Brasil, do nordeste à região sul, garantindo, assim, uma grande capacidade de produção, mantendo sempre a qualidade e excelência para atender todos os clientes - nacionais e internacionais.
      </TabPanel>
    </Box>
  );
}