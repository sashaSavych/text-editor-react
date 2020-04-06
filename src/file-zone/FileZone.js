import React, {Component} from 'react';
import './FileZone.scss';
import {
    getSelectedString,
    getSelectedText,
    mockText,
    replaceSelectedTextWithSuggestion,
    setTextSelectedSource
} from '../services/text.service';
import Suggestions from "../suggestions/Suggestions";

export default class FileZone extends Component {
    constructor(props) {
        super(props);
        this.state = { currentWord: '' };

        this.onTextSelectionChange = this.onTextSelectionChange.bind(this);
        this.onSuggestionSelect = this.onSuggestionSelect.bind(this);
    }

    onTextSelectionChange() {
        const selectedText = getSelectedText();

        setTextSelectedSource(Boolean(Math.abs(selectedText.anchorOffset - selectedText.focusOffset)));
        this.setState({ currentWord: getSelectedString() });
    }

    onSuggestionSelect(selectEvent) {
        const selectedSuggestion = selectEvent.target.innerHTML;
        replaceSelectedTextWithSuggestion(selectedSuggestion);
        this.setState({ currentWord: '' });
    }

    render() {
        return (
            <div id="file-zone">
                <div
                    id="file"
                    contentEditable="true"
                    dangerouslySetInnerHTML={{ __html: mockText }}
                    onSelect={this.onTextSelectionChange}>
                </div>
                <Suggestions
                    currentWord={this.state.currentWord}
                    onSuggestionSelect={this.onSuggestionSelect}/>
            </div>
        );
    }
}
FileZone.defaultProps = { content: '' };

