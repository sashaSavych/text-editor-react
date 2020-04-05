import React, { Component } from 'react';
import './ControlPanel.scss';
import FormatButton from "./format-button/FormatButton";
import { initialFormatButtons } from "./ControlPanelConfig";

export default class ControlPanel extends Component {
    render() {
        return (
            <div id="control-panel">
                <div id="format-actions">{
                    initialFormatButtons.map(item => {
                        return <FormatButton
                            key={item.name}
                            name={item.name}
                            markup={item.markup}
                            disabled={item.disabled}
                            applied={item.applied}
                            onApply={console.log}/>
                    })
                }
                </div>
            </div>
        );
    }
}
