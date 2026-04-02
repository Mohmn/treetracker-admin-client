import React, { useEffect } from 'react';
import { Grid, Paper, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import Menu from 'components/common/Menu';
import { documentTitle } from 'common/variables';

const useStyles = makeStyles((theme) => ({
  page: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'nowrap',
  },
  sidebar: {
    height: '100%',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(6),
  },
  card: {
    maxWidth: 960,
    padding: theme.spacing(4),
  },
}));

export default function OrganizationVerifyView() {
  const classes = useStyles();

  useEffect(() => {
    document.title = `Organization Verify - ${documentTitle}`;
  }, []);

  return (
    <Grid className={classes.page}>
      <Paper elevation={3} className={classes.sidebar}>
        <Menu variant="plain" />
      </Paper>

      <Grid item className={classes.content}>
        <Paper elevation={2} className={classes.card}>
          <Typography variant="h3">Verify</Typography>
        </Paper>
      </Grid>
    </Grid>
  );
}
