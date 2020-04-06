import React, {Component} from 'react';
import './ControlPanel.scss';
import FormatButton from "./format-button/FormatButton";
import {initialFormatButtons} from "./ControlPanelConfig";
import {isTextSelected$} from "../text.service";
import {getFormatsForFocusNode, saveFormatState} from "../format.service";

export default class ControlPanel extends Component {
    constructor(props) {
        super(props);
        this.state = { buttonsConfig: initialFormatButtons };

        this.onToggleFormat = this.onToggleFormat.bind(this);
        this.toggleButtonStates = this.toggleButtonStates.bind(this);
    }

    onToggleFormat(format) {
        document.execCommand(format);
        saveFormatState(format);
    }

    toggleButtonStates(isTextSelected) {
        const formats = getFormatsForFocusNode() || [];
        let buttonsConfig = [...this.state.buttonsConfig];

        buttonsConfig = buttonsConfig
            .map(buttonConfig => ({ ...buttonConfig, disabled: !isTextSelected }));

        buttonsConfig = buttonsConfig
            .map(buttonConfig => ({ ...buttonConfig, applied: formats.includes(buttonConfig.name) }));

        this.setState({ buttonsConfig });
    }

    render() {
        return (
            <div id="control-panel">
                <div className="control-group">
                    <div id="format-actions">{
                        this.state.buttonsConfig.map(item => {
                            return <FormatButton
                                key={item.name}
                                name={item.name}
                                markup={item.markup}
                                disabled={item.disabled}
                                applied={item.applied}
                                onToggleFormat={this.onToggleFormat}/>
                        })
                    }
                    </div>
                </div>
                <div className="control-group">
                    <div>Synonyms</div>
                </div>
            </div>
        );
    }

    componentDidMount() {
        isTextSelected$
            .subscribe(isTextSelected => this.toggleButtonStates(isTextSelected));
    }
}
