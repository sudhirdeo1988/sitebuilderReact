import React from 'react';
import pageJSON from  '../pageJSON/sampleSite.json';
import PageBody from '../componentLibrary/PageBody/PageBody';
import PageHeader from '../componentLibrary/PageHeader/PageHeader';

const SamplePage = (props) =>{
    const data = props.match.path === '/' ? 'home' : props.match.path;
    return(
        <React.Fragment>
            <PageHeader pageHeader={pageJSON.header} pageData={pageJSON[data]} />
            <PageBody pageData={pageJSON[data]} />
        </React.Fragment>
    );
}

export default SamplePage;


// import React from "react";
// import pageJSON from  '../pageJSON/sampleSite.json';

// class SamplePage extends React.Component {
//     constructor(props) {
//     super(props);
//         this.state = {
//             components: []
//         };
//     }
//     addComponent = async dynamicComp => {
//         import(`../componentLibrary/${dynamicComp}/${dynamicComp}.js`)
//         .then(component => {
//                 this.setState({
//                     components: this.state.components.concat(component.default)
//                 })
//             }
//         )
//         .catch(error => {
//             console.error(`"${dynamicComp}" not Loaded`);
//         });
//     };
//     async componentDidMount() {
//         pageJSON.componentHirerchy.map(async dynamicComp => await this.addComponent(dynamicComp));
//     }

//     render() {
//         console.log(this.props.match.path);
//     const { components } = this.state;
//     if (components.length === 0) return <div>Loading...</div>;
//     const componentsElements = components.map((Component, index) => (
//         <Component {...pageJSON} />
//     ));
//     return <div className="App">{componentsElements}</div>;
//     }
// }
// export default SamplePage;