import React from 'react';
import './ControlPanel.scss';
import FormatButton from "./format-button/FormatButton";
import {initialFormatButtons} from "./ControlPanelConfig";
import {isTextSelected$} from "../services/text.service";
import {getFormatsForFocusNode, saveFormatState} from "../services/format.service";
import Destroyer from "../shared/Destroyer";

export default class ControlPanel extends Destroyer {
    constructor(props) {
        super(props);
        this.state = { buttonsConfig: initialFormatButtons };

        this.toggleButtonStates = this.toggleButtonStates.bind(this);
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
                                onToggleFormat={saveFormatState}/>
                        })
                    }
                    </div>
                </div>
            </div>
        );
    }

    componentDidMount() {
        this.subscription = isTextSelected$.subscribe(isTextSelected => this.toggleButtonStates(isTextSelected));
    }
}
