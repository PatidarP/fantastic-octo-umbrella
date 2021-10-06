import {makeStyles} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  paper: {
    backgroundColor: "#8ecae6",
    padding: theme.spacing(2),
    margin: theme.spacing(1)
  },
  para:{
    marginTop:theme.spacing(2),
    maxWidth: '70%',
  },
}))

export default useStyles;