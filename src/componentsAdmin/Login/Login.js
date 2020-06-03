import React, { useEffect } from 'react';
import SignIn from '../SignIn/SignIn';
import {fetchData} from '../../utilities/api';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import SignUp from '../SignUp/SignUp';
import './Login.scss';

function TabPanel(props) {
    const { children, value, index, ...other } = props;
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
        className="tabBody"
      >
        {value === index && (
          <Box p={3}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }

  
const Login = () => {

    const [value, setValue] = React.useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    useEffect(() => {
        getData();
    })

    const getData = async () =>{
        const data = await fetchData();
        console.log(data);
    }
    return(
        <div className="c-pageWrapper">
            <div className="c-rightSect">
                <AppBar position="static">
                    <Tabs value={value} onChange={handleChange} centered className="tabHeader">
                        <Tab label="Sign In" />
                        <Tab label="Sign Up" />
                    </Tabs>
                </AppBar>
                <TabPanel value={value} index={0}>
                    <SignIn />
                </TabPanel>
                <TabPanel value={value} index={1}>
                    <SignUp />
                </TabPanel>
            </div>

        </div>
    );
}

export default Login;