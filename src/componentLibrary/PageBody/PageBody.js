import React, {useEffect, useState} from 'react';


const PageBody = props =>{
    const pageData = props.pageData;
    console.log(pageData);
    const [componentStack, setcomponentStack] = useState([]);
    useEffect(() => {
        const promises = pageData.componentHirerchy.map((path) => {
            return import(`../${path}/${path}`);
        });
        Promise.all(promises).then((modules) => {
            const comp = modules.map(mod => mod.default);
            setcomponentStack(comp);
        });
    },[pageData.componentHirerchy]);

    if (componentStack.length === 0) {
        return (<>
        Loading...
        </>);
    }
    return(
        <React.Fragment>
            {componentStack.map((Component) => {
                return <Component {...pageData} />
            })}
        </React.Fragment>
    );
}

export default PageBody;