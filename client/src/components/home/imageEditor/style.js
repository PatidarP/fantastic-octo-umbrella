import {makeStyles} from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    input: {
        display: 'none',
      },
    margin: {
        margin: theme.spacing(1),
      },
    newtempbtn:{
        fontFamily:'Montserrat',
        margin: theme.spacing(5),
        fontSize:35,
    },
    card:{
        //backgroundColor:'black',
        fontFamily:'Montserrat',
        maxWidth: 600,
        margin: 'auto',
        marginTop: theme.spacing(5),
        boxShadow:3,
        backgroundColor:"#023047",
    },
    textf:{
        maxWidth: 567,
        marginTop:theme.spacing(2),
        margin:theme.spacing(2),
        backgroundColor:"#a8dadc",
        
        
    },
    submitButton:{
        fontFamily:'Montserrat',
        marginRight:0,
        marginLeft:0,
        fontSize:60,
        backgroundColor:"#023047",
    },
    resetButton:{
        marginLeft:0,
        marginRight:0,
        margin:theme.spacing(7),
    },
    container:{
        marginTop:theme.spacing(3),
        
    },
}))