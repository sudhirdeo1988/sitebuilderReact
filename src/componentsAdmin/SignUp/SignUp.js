import React, { useState, useEffect } from 'react';
import { compose, bindActionCreators } from "redux";
import { connect } from "react-redux";
import { makeStyles } from '@material-ui/core/styles';
import { pink } from '@material-ui/core/colors';
import {Avatar, Button} from '@material-ui/core';
import uuid from 'react-uuid';
import { ValidatorForm, TextValidator} from 'react-material-ui-form-validator';
import AccountCircleRoundedIcon from '@material-ui/icons/AccountCircleRounded';
import { addNewUser } from "../../action/user.action";
import { userInitialState } from '../../store/initialState';

const useStyles = makeStyles((theme) => ({
    pink: {
        color: theme.palette.getContrastText(pink[500]),
        backgroundColor: pink[500],
    },
    btnContainer:{
        textAlign: "center"
    }
}));


const SignUp = (props) => {
    const [formData, setFormData] = useState({...userInitialState});
    const classes = useStyles();

    const handleChange = event => {
        formData[event.target.name] = event.target.value;
        formData.userID =  uuid();
        setFormData({ ...formData});
    }
    const validateForm = async event =>{
        event.preventDefault();
        delete formData.confirmPassword;
        await props.addNewUser(formData);
        setFormData({...userInitialState});
    }

    useEffect(() => {
        ValidatorForm.addValidationRule('isPasswordMatch', (value) => {
            if (value !== formData.password) {
                return false;
            }
            return true;
        });
        ValidatorForm.addValidationRule('isHavingSpace', (value) => {
            if (/\s/.test(value)) {
                return false;
            }
            return true;
        });
    },[formData.password])


    return(
        <div className="c-signin">
            <div className="imgSect">
                <Avatar className={classes.pink}>
                    <AccountCircleRoundedIcon />
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
                        name='emailid' 
                        value={formData.emailid}
                        type="email" 
                        label="Email ID" 
                        variant="outlined" 
                        className="formField"
                        validators={['required', 'isEmail']}
                        errorMessages={['Enter Email ID', 'Invalid Email ID']}
                        />
                    <TextValidator 
                        onChange={handleChange} 
                        name='userName' 
                        value={formData.userName}
                        type="text" 
                        label="User Name" 
                        variant="outlined" 
                        className="formField" 
                        validators={['required', 'isHavingSpace']}
                        errorMessages={['Enter User Name', 'No space allowd in username']}
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
                        label="Confirm Password" 
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
    );
}


const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      addNewUser
    },
    dispatch
  );

export default compose(connect(null, mapDispatchToProps))(SignUp);