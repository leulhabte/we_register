import React from 'react';
import {Container, Card, Button, Grid, Box, Typography, CardContent, InputBase, Paper} from '@material-ui/core';
import {AccountCircle, Lock} from '@material-ui/icons';
import useStyles from '../config/Styling';
import {Link} from 'react-router-dom';

const Login = (props)=>{
    const classes = useStyles();
    return(
        <Container  style={{marginTop: '4rem'}}>
            <Grid container className={classes.logInGrid}>
                <Grid item md={4}>
                    <Card className={classes.loginContainer}>
                        <CardContent>
                            <Box display="flex" flexDirection="column">
                            <Typography className={classes.loginHeader}>Login</Typography>
                                <Box height={60}/>
                                <Paper className={classes.inputHolder}>
                                <AccountCircle className={classes.fieldIcon}/>
                                <InputBase placeholder="Username" className={classes.inputField}/>
                                </Paper>
                                <Box height={30}/>
                                <Paper className={classes.inputHolder}>
                                <Lock className={classes.fieldIcon}/>
                                <InputBase placeholder="Password" className={classes.inputField}/>
                                </Paper>
                                <Box height={30}/>
                                <Typography className={classes.loginText1}>Forget Password</Typography>
                                <Box height={50}/>
                                <Button className={classes.logInButton} onClick={()=>{props.history.push('/menu')}}>Sign in</Button>
                                <Box height={30}/>
                                <Typography className={classes.loginText2}>Create Bussiness Account</Typography>
                            </Box>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Container>
    );
}

export default Login;