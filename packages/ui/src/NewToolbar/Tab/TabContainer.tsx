import * as React from 'react';

import Grid from '@material-ui/core/Grid';

const TabContainer: React.SFC = (props) => (
  <Grid item={true} xs={6}>
    {props.children}
  </Grid>
);

export default TabContainer;
