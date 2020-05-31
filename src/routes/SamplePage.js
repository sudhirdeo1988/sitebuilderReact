// import React, {useEffect, useState} from 'react';
// import pageJSON from  '../pageJSON/sampleSite.json';

// const SamplePage = () =>{
//     const [dyncomponents, setComponents] = useState([]);
//     useEffect(() => {
//         const promises = pageJSON.componentHirerchy.map((path) => {
//             return import(`../componentLibrary/${path}/${path}`);
//         });
//         Promise.all(promises).then((component) => {
//             setComponents(component);
//         });
//     });

//     if (dyncomponents.length === 0) {
//         return (<>
//         Loading...
//         </>);
//     }

//     return(
//         <React.Fragment>
//         {dyncomponents.map((Component) => {
//             return <Component />
//         })}
//         {/* <HeaderType1 HeaderType1={pageJSON.HeaderType1} />
//         <CoursesType1 /> */}


//         </React.Fragment>
//     );
// }

// export default SamplePage;


import React from "react";
import pageJSON from  '../pageJSON/sampleSite.json';

class SamplePage extends React.Component {
    constructor(props) {
    super(props);
        this.state = {
            components: []
        };
    }
    addComponent = async dynamicComp => {
        import(`../componentLibrary/${dynamicComp}/${dynamicComp}.js`)
        .then(component => {
                this.setState({
                    components: this.state.components.concat(component.default)
                })
            }
        )
        .catch(error => {
            console.error(`"${dynamicComp}" not Loaded`);
        });
    };
    async componentDidMount() {
        pageJSON.componentHirerchy.map(async dynamicComp => await this.addComponent(dynamicComp));
    }

    render() {
    const { components } = this.state;
    if (components.length === 0) return <div>Loading...</div>;
    const componentsElements = components.map((Component, index) => (
        <Component {...pageJSON} />
    ));
    return <div className="App">{componentsElements}</div>;
    }
}
export default SamplePage;