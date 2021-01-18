import React from 'react';
import Typography from '@material-ui/core/Typography';

function Title({activeStep, sizeFull, title, titleDefalut}) {
  return (
      <React.Fragment>
        {activeStep === sizeFull ? (
          <Typography component="h1" variant="h4" align="center">
            {titleDefalut}
          </Typography>
        ) : (
          <Typography component="h1" variant="h4" align="center">
            {title}
          </Typography>
        )}
      </React.Fragment>
  );
}
export default Title