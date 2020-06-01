import React, {useEffect, useState} from 'react';
import pageJSON from  '../../pageJSON/sampleSite.json';

const PageHeader = (props) =>{
    const [header, setheader] = useState([]);
    useEffect(() => {
        const promises = pageJSON.componentFix.map((path) => {
            return import(`../${path}/${path}`);
        });
        Promise.all(promises).then((modules) => {
            const comp = modules.map(mod => mod.default);
            setheader(comp);
        });
    },[props.header]);

    if (header.length === 0) {
        return (<>
        Loading...
        </>);
    }

    return(
        <React.Fragment>
            {header.map((Component) => {
                return <Component data={pageJSON} />
            })}
        </React.Fragment>
    );
}

export default PageHeader;

