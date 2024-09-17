import { useState } from 'react';
import { BsLightning, BsTornado } from 'react-icons/bs';
import { CiWarning } from 'react-icons/ci';
import './App.css';
import ToggleIconButton from './components/ToggleIconButton';
import { GiWoodenCrate } from 'react-icons/gi';
import { Container, Typography, Card, Stack } from '@mui/material';
import { BiCloud, BiPhone } from 'react-icons/bi';
import { FaComputer } from 'react-icons/fa6';
import NumericInput from './components/NumericInput';

function App() {
  const [isActive, setIsActive] = useState(false);
  return (
    <Container>
      <Typography variant='h4'>Title</Typography>
      <Card
        sx={{
          padding: 2,
        }}>
        <Stack
          direction='row'
          gap={2}
          alignItems='center'
          justifyContent='center'>
          <ToggleIconButton
            size='large'
            iconColor={({ palette }) => palette.error.main}
            isToggled={isActive}
            onClick={() => setIsActive((prev) => !prev)}>
            <BsLightning />
          </ToggleIconButton>
          <ToggleIconButton
            size='large'
            isToggled={isActive}
            iconColor='#93bf85'
            onClick={() => setIsActive((prev) => !prev)}>
            <CiWarning />
          </ToggleIconButton>
          <ToggleIconButton
            size='large'
            isToggled={isActive}
            onClick={() => setIsActive((prev) => !prev)}>
            <BsLightning />
          </ToggleIconButton>
          <ToggleIconButton
            size='large'
            isToggled={isActive}
            iconColor={() => '#ff0000'}
            onClick={() => setIsActive((prev) => !prev)}>
            <BiCloud />
          </ToggleIconButton>
          <ToggleIconButton
            size='large'
            isToggled={isActive}
            iconColor={({ palette }) => palette.warning.main}
            onClick={() => setIsActive((prev) => !prev)}>
            <FaComputer />
          </ToggleIconButton>
          <ToggleIconButton
            size='large'
            iconColor={({ palette }) => palette.info.main}
            isToggled={isActive}
            onClick={() => setIsActive((prev) => !prev)}>
            <BsTornado />
          </ToggleIconButton>
        </Stack>
      </Card>
      <Card
        sx={{
          padding: 2,
        }}>
        <NumericInput
          name='Test'
          label='Test'
          size='small'
          variant='outlined'
          suffix=' $'
        />
      </Card>
    </Container>
  );
}

export default App;
