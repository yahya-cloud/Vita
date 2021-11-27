import { Grid } from '@mui/material';
import React, { useState } from 'react';
import Select from 'components/common/Select';
import { styled, Button } from '@mui/material';
import { expertiseOptions, motivationOptions } from 'data';

const StyledButton = styled(Button)`
  background-size: 200%;
  font-weight: 700;
  color: #f5f5f5;
  font-size: 1rem;
  background-image: linear-gradient(90deg, #3512b2, #d18873);
  box-shadow: 0 2px 1px transparent, 0 4px 2px transparent,
    0 8px 4px transparent, 0 16px 8px transparent, 0 32px 16px transparent;
  transition: all 0.8s cubic-bezier(0.32, 1.32, 0.42, 0.68);

  /* transition: all 0.8s cubic-bezier(0.32, 1.32, 0.42, 0.68); */
  :hover {
    transform: scale(1.05);
    /* transform: linear-gradient(230deg, #35249b, #8b13c3 50%, #ea577a); */
  }
`;

const StyledGrid = styled(Grid)({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-around',
  width: '100%',
  p: 2,
  // BackgroundColor: 'greyx`',
});

const Seachbox = () => {
  const [motivation, setMotivation] = useState<string>();
  const [expertise, setExpertise] = useState<string>();
  return (
    <>
      <Grid container item>
        <StyledGrid item xs={12}>
          <Select
            data={motivationOptions}
            option={motivation}
            setOption={setMotivation}
            dropDownLabel="Motivation"
            helperText="What do you need help with?"
          />
          <Select
            data={expertiseOptions}
            option={expertise}
            setOption={setExpertise}
            dropDownLabel="Expertise"
            helperText="What domain are you looking for?"
          />
        </StyledGrid>
      </Grid>
      <Grid
        container
        item
        sx={{
          placeContent: 'center',
          padding: '1rem',
        }}>
        <StyledButton variant="contained">Find a Mentor ⚡</StyledButton>
      </Grid>
    </>
  );
};

export default Seachbox;