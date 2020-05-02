import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import ButtonBase from '@material-ui/core/ButtonBase';
import Container from '@material-ui/core/Container';
import BackgroundImage from './static/images/background.jpg';

const background = {
  url: BackgroundImage,
  title: 'Continue With Spotify',
  width: '50%'
}

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundImage: `url(${background.url})`,
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: 'cover',
    backgroundPosition: 'center 40%',
  },
  login: {
    position: 'center',
    height: 800,
    [theme.breakpoints.down('xs')]: {
      width: '100% !important', // Overrides inline-style
      height: 100,
    },
    '&:hover, &$focusVisible': {
      zIndex: 1,
      '& $imageBackdrop': {
        opacity: 0.15,
      },
      '& $buttonMarked': {
        opacity: 0,
      },
      '& $loginTitle': {
        border: '4px solid currentColor',
      },
    },
  },
  focusVisible: {},
  imageButton: {
    position: 'center',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.common.white,
  },
  imageBackdrop: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: theme.palette.common.black,
    opacity: 0.4,
    transition: theme.transitions.create('opacity'),
  },
  loginTitle: {
    position: 'relative',
    padding: `${theme.spacing(2)}px ${theme.spacing(4)}px ${theme.spacing(1) + 6}px`,
  },
  buttonMarked: {
    height: 3,
    width: 18,
    backgroundColor: theme.palette.common.white,
    position: 'absolute',
    bottom: -2,
    left: 'calc(50% - 9px)',
    transition: theme.transitions.create('opacity'),
  },
}));

export default function Login() {
  const classes = useStyles();

  return (
      <div className={classes.root}>
        <span className={classes.imageBackdrop} />
        <Container
          component="main"
          width="1"
          >
            <ButtonBase
              focusRipple
              className={classes.login}
              focusVisibleClassName={classes.focusVisible}
              style={{
                width: "100%",
              }}
              href="api/login"
            >
              <span className={classes.imageButton}>
                <Typography
                 component="span"
                 variant="subtitle1"
                 color="inherit"
                 className={classes.loginTitle}
                 >
                  {background.title}
                  <span className={classes.buttonMarked} />
                </Typography>
              </span>
            </ButtonBase>
        </Container>
      </div>
  );
}
