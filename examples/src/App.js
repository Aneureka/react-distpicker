import React from 'react';
import DistPicker from 'react-distpicker';
import './App.css'

class App extends React.Component {


    handleSelectSimply(dist) {
        console.log(dist);
    }

    render() {

        const codeOriginal = '<DistPicker />';
        const codeCustomize = '<DistPicker pickerClass="picker" selectClass="select" />\n' +
                              '\n' +
                              '.picker {\n' +
                              '    margin: 0 auto;\n' +
                              '}\n' +
                              '\n' +
                              '.select {\n' +
                              '    height: 35px;\n' +
                              '    outline: none;\n' +
                              '    border: darkseagreen solid 3px;\n' +
                              '    background-color: transparent;\n' +
                              '    padding: 10px;\n' +
                              '    transition: box-shadow 0.2s;\n' +
                              '    margin-right: 10px;\n' +
                              '    width: 200px;\n' +
                              '}';



        return (
            <div className="app">
                <h1 className="title">React DistPicker Demo</h1>
                <div className="demo">
                    <h2 className="subtitle">Original / Ugly Demo </h2>
                    <DistPicker />
                    <pre><code>{codeOriginal}</code></pre>
                </div>
                <div className="demo">
                    <h2 className="subtitle">Customize / Elegant Demo</h2>
                    <DistPicker pickerClass="picker" selectClass="select" onSelect={this.handleSelectSimply.bind(this)}/>
                    <pre><code>{codeCustomize}</code></pre>
                </div>

            </div>
        );
    }

}

export default App;
