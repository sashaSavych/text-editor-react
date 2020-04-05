import React, {Component} from 'react';
import './App.scss';
import ControlPanel from "./control-panel/ControlPanel";
import FileZone from "./file-zone/FileZone";
import Footer from "./footer/Footer";

export default class App extends Component {
    render() {
        return (
            <div className="App">
                <header>
                    <span>Text Editor</span>
                </header>
                <main>
                    <ControlPanel/>
                    <FileZone/>
                </main>
                <footer>
                    <Footer/>
                </footer>
            </div>
        );
    }
}
