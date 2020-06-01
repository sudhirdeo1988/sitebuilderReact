import React, {useEffect, useState} from 'react';
import pageJSON from  '../../pageJSON/sampleSite.json';

const PageBody = props =>{
    console.log(props);
    const [dyncomponents, setComponents] = useState([]);
    useEffect(() => {
        const promises = pageJSON.componentHirerchy.map((path) => {
            return import(`../${path}/${path}`);
        });
        Promise.all(promises).then((modules) => {
            const comp = modules.map(mod => mod.default);
            setComponents(comp);
        });
    },[]);

    if (dyncomponents.length === 0) {
        return (<>
        Loading...
        </>);
    }
    return(
        <React.Fragment>
            {dyncomponents.map((Component) => {
                return <Component {...pageJSON} />
            })}
        </React.Fragment>
    );
}

export default PageBody;