import React, {Component} from 'react';
import './FileZone.scss';
import {content$, getSelectedString, getSelectedText, isTextSelectedSource$} from '../text.service';
import Suggestions from "../suggestions/Suggestions";

export default class FileZone extends Component {
    constructor(props) {
        super(props);
        this.state = {
            content: props.content,
            currentWord: ''
        };

        this.onTextSelectionChange = this.onTextSelectionChange.bind(this);
    }

    onTextSelectionChange() {
        const selectedText = getSelectedText();

        isTextSelectedSource$.next(Boolean(Math.abs(selectedText.anchorOffset - selectedText.focusOffset)));
        this.setState({ currentWord: getSelectedString() });
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
                <Suggestions currentWord={this.state.currentWord}/>
            </div>
        );
    }

    componentDidMount() {
        content$.subscribe(content => this.setState({ content }));
    }
}
FileZone.defaultProps = { content: '' };

