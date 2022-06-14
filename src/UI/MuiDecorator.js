import React from 'react';
import { ThemeProvider, StyledEngineProvider, createTheme } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';

import { ThemeProvider as Emotion10ThemeProvider } from 'emotion-theming';

import withChannel from '../adk/WithChannel';
import { EVENT_ID_INIT, EVENT_ID_DATA, EVENT_ID_BACK } from '../config';

const currentTheme = data => {
  try {
    const theme = data.themes[data.themeInd];
    return createTheme(theme);
  } catch (err) {
    return createTheme({});
  }
};

// eslint-disable-next-line react/prop-types
const MuiDecorator = ({ data, story }) => { 
  if (data.withEmotionProvider){
    return (
      <Emotion10ThemeProvider injectFirst theme={currentTheme(data)}>
        <ThemeProvider theme={currentTheme(data)}>
          {data.withCssBaseline && <CssBaseline />}
          <div>{story}</div>
        </ThemeProvider>
      </Emotion10ThemeProvider>
    )
  }
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={currentTheme(data)}>
        {data.withCssBaseline && <CssBaseline />}
        <div>{story}</div>
      </ThemeProvider>
    </StyledEngineProvider>
  );
}
// eslint-disable-next-line react/prop-types
const MuiDecoratorWithEmotion = ({ data, story }) => 

export default withChannel({ EVENT_ID_INIT, EVENT_ID_DATA, EVENT_ID_BACK })(
  MuiDecorator
);
