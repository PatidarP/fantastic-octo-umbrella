import {makeStyles} from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    card:{
        fontFamily:'Montserrat',
        maxWidth: 600,
        margin: 'auto',
        marginTop: theme.spacing(5)
    },
    title:{
        fontFamily:'Montserrat',
        padding: `${theme.spacing(3)}px ${theme.spacing(2.5)}px ${theme.spacing(2)}px`,
        color:'#0b090a'
    },
    media:{
        minHeight: 400,
        margin: theme.spacing(1),
    }

}))