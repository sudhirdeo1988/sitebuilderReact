import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { pink } from '@material-ui/core/colors';
import Avatar from '@material-ui/core/Avatar';
import LockOpenRoundedIcon from '@material-ui/icons/LockOpenRounded';
import Button from '@material-ui/core/Button';
import { ValidatorForm, TextValidator} from 'react-material-ui-form-validator';
import {checkLogin} from '../../utilities/api';
import Alert from '@material-ui/lab/Alert';

const useStyles = makeStyles((theme) => ({
    pink: {
        color: theme.palette.getContrastText(pink[500]),
        backgroundColor: pink[500],
    },
    btnContainer:{
        textAlign: "center",
        margin: "10px 0"
    },
    linkContainer:{
        display:"block",
        textAlign: "right",
        margin: "20px 0",
        outline: "none"
    }
}));

const SignIn = (props) => {
    const [formData, setFormData] = useState({
        userName: '',
        password: ''
    });
    const [isLoginError, serIsLoginError] = useState(false);
    const classes = useStyles();

    const handleChange = event => {
        formData[event.target.name] = event.target.value;
        setFormData({ ...formData});
    }
    const validateForm = async event =>{
        event.preventDefault();
        const userStatus = await checkLogin(formData);
        setFormData({
            userName: '',
            password: ''
        });
        if(userStatus.statusCode === 404){
            serIsLoginError(true);
        } else {
            serIsLoginError(false);
        }
        console.log(userStatus);
    }

    return(
        <div className="c-signin">
            <div className="imgSect">
                <Avatar className={classes.pink}>
                    <LockOpenRoundedIcon />
                </Avatar>
            </div>
            <div className="formSect">
                <ValidatorForm
                    onSubmit={validateForm}
                    onError={errors => console.log(errors)}
                >
                    <TextValidator 
                        onChange={handleChange} 
                        name='userName' 
                        value={formData.userName}
                        type="text" 
                        label="User Name" 
                        variant="outlined" 
                        className="formField" 
                        validators={['required']}
                        errorMessages={['Enter User Name']}
                    />
                    <TextValidator 
                        onChange={handleChange} 
                        name='password' 
                        value={formData.password}
                        type="password" 
                        label="Password" 
                        variant="outlined" 
                        className="formField" 
                        validators={['required']}
                        errorMessages={['Enter Password']}
                    />
                    <div className={classes.linkContainer}>
                        <Button color="primary">Forgot Password</Button>
                    </div>
                    {isLoginError && (
                        <Alert severity="error">Invalid Username Password</Alert>
                    )}
                    <div className={classes.btnContainer}>
                        <Button type="submit" variant="contained" color="primary">
                            Login
                        </Button>
                    </div>

                </ValidatorForm>
            </div>
        </div>
    );
}


export default SignIn;