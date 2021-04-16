import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Box from '@material-ui/core/Box';
import MenuIcon from '@material-ui/icons/Menu';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import IconButton from '@material-ui/core/IconButton';
import VideoIcon from '@material-ui/icons/VideoCall';
import Apps from '@material-ui/icons/Apps';
import MoreVert from '@material-ui/icons/MoreVert';
import Button from '@material-ui/core/Button';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MicIcon from '@material-ui/icons/Mic';
import Hidden from '@material-ui/core/Hidden';

const useStyle = makeStyles((theme) => ({
  root: {
    boxShadow: 'none',
    zIndex: theme.zIndex.drawer + 1,
    backgroundColor: theme.palette.background.default,
  },
  toolbar: {
    minHeight: 56,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  logo: {
    cursor: 'pointer',
    height: 18,
    marginLeft: theme.spacing(3),
  },
  search: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    height: 35,
    width: 700,
  },
  input: {
    flex: 1,
    paddingLeft: 10,
  },
  buttonIcon: {
    width: 35,
    height: 35,
    borderRadius: 0,
    '&:hover, &.Mui-focusVisible': { background: 'none' },
  },
  buttonIconSecond: {
    marginRight: 10,
  },
}));

const TopBar = () => {
  const classes = useStyle();

  return (
    <AppBar className={classes.root} color="default">
      <Toolbar className={classes.toolbar}>
        <Box display="flex" alignItems="center">
          <MenuIcon />
          <img
            src="/new-youtube-logo.svg"
            alt="logo"
            className={classes.logo}
          />
        </Box>
        <Hidden mdDown>
          <Box>
            <Paper component="form" className={classes.search} elevation={3}>
              <InputBase
                className={classes.input}
                placeholder="Search"
                inputProps={{ 'aria-label': 'search google maps' }}
              />
              <IconButton
                className={classes.buttonIcon}
                type="submit"
                aria-label="search"
              >
                <SearchIcon />
              </IconButton>
              <IconButton
                className={classes.buttonIcon}
                type="submit"
                aria-label="search"
              >
                <MicIcon />
              </IconButton>
            </Paper>
          </Box>
        </Hidden>
        <Box>
          <IconButton
            className={classes.buttonIconSecond}
            type="submit"
            aria-label="search"
          >
            <VideoIcon />
          </IconButton>
          <IconButton
            className={classes.buttonIconSecond}
            type="submit"
            aria-label="search"
          >
            <Apps />
          </IconButton>
          <IconButton
            className={classes.buttonIconSecond}
            type="submit"
            aria-label="search"
          >
            <MoreVert />
          </IconButton>
          <Button
            variant="outlined"
            color="secondary"
            component="a"
            startIcon={<AccountCircle />}
          >
            SING IN
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default TopBar;
