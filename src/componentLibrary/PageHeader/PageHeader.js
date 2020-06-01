import React, {useEffect, useState} from 'react';
import { BrowserRouter as Router } from "react-router-dom";

const PageHeader = (props) =>{
    const headerData = props.pageHeader;
    const [header, setheader] = useState([]);
    useEffect(() => {
        const promises = headerData.type.map((path) => {
            return import(`../${path}/${path}`);
        });
        Promise.all(promises).then((modules) => {
            const comp = modules.map(mod => mod.default);
            setheader(comp);
        });
    },[headerData.type]);

    if (header.length === 0) {
        return (<>
        Loading...
        </>);
    }

    return(
        <React.Fragment>
            <Router>
            {header.map((Component) => {
                return <Component headerData={headerData} pageData={props.pageData} />
            })}
            </Router>
        </React.Fragment>
    );
}

export default PageHeader;

