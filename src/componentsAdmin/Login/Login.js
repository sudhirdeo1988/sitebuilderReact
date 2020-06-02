import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { pink } from '@material-ui/core/colors';
import Avatar from '@material-ui/core/Avatar';
import FolderIcon from '@material-ui/icons/Folder';
import Button from '@material-ui/core/Button';
import uuid from 'react-uuid';
import { ValidatorForm, TextValidator} from 'react-material-ui-form-validator';
import './Login.scss';

const useStyles = makeStyles((theme) => ({
    pink: {
        color: theme.palette.getContrastText(pink[500]),
        backgroundColor: pink[500],
    },
    btnContainer:{
        textAlign: "center"
    }
}));

const Login = () => {
    const [formData, setFormData] = useState({
        userID: '',
        name: '',
        userName: '',
        password: '',
        confirmPassword: ''
    });
    const classes = useStyles();

    const handleChange = event => {
        formData[event.target.name] = event.target.value;
        formData.userID =  uuid();
        setFormData({ ...formData});
    }
    const validateForm = event =>{
        event.preventDefault();
        console.log(formData);
    }

    useEffect(() => {
        ValidatorForm.addValidationRule('isPasswordMatch', (value) => {
            if (value !== formData.password) {
                return false;
            }
            return true;
        });
    },[formData.password])

    return(
        <div className="c-pageWrapper">
            <div className="c-rightSect">
                <div className="c-signin">
                    <div className="imgSect">
                        <Avatar className={classes.pink}>
                            <FolderIcon />
                        </Avatar>
                    </div>
                    <div className="formSect">
                        <ValidatorForm
                            onSubmit={validateForm}
                            onError={errors => console.log(errors)}
                        >
                            <TextValidator 
                                onChange={handleChange} 
                                name='name' 
                                value={formData.name}
                                type="text" 
                                label="Institute Name" 
                                variant="outlined" 
                                className="formField"
                                validators={['required']}
                                errorMessages={['Enter Institute Name']}
                                />
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
                            <TextValidator 
                                onChange={handleChange} 
                                name='confirmPassword' 
                                type="password" 
                                value={formData.confirmPassword}
                                label="Password" 
                                variant="outlined" 
                                className="formField" 
                                validators={['required', 'isPasswordMatch']}
                                errorMessages={['Please confirm Password','password Mismatch']}
                            />
                            <div className={classes.btnContainer}>
                                <Button type="submit" variant="contained" color="primary">
                                    Sign In
                                </Button>
                            </div>

                        </ValidatorForm>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Login;