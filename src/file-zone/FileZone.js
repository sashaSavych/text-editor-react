import React, {Component} from 'react';
import './FileZone.scss';
import {
    content$,
    getSelectedString,
    getSelectedText,
    isTextSelectedSource$,
    replaceSelectedTextWithSuggestion
} from '../text.service';
import Suggestions from "../suggestions/Suggestions";

export default class FileZone extends Component {
    constructor(props) {
        super(props);
        this.state = {
            content: props.content,
            currentWord: ''
        };

        this.onTextSelectionChange = this.onTextSelectionChange.bind(this);
        this.onSuggestionSelect = this.onSuggestionSelect.bind(this);
    }

    onTextSelectionChange() {
        const selectedText = getSelectedText();

        isTextSelectedSource$.next(Boolean(Math.abs(selectedText.anchorOffset - selectedText.focusOffset)));
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
                    dangerouslySetInnerHTML={{ __html: this.state.content }}
                    onSelect={this.onTextSelectionChange}>
                </div>
                <Suggestions
                    currentWord={this.state.currentWord}
                    onSuggestionSelect={this.onSuggestionSelect}/>
            </div>
        );
    }

    componentDidMount() {
        content$.subscribe(content => this.setState({ content }));
    }
}
FileZone.defaultProps = { content: '' };

