import React, {Component} from 'react';
import './FileZone.scss';
import {content$, getSelectedText, isTextSelectedSource$} from '../text.service';

export default class FileZone extends Component {
    constructor(props) {
        super(props);
        this.state = { content: props.content };
    }

    onTextSelectionChange() {
        const selectedText = getSelectedText();

        isTextSelectedSource$.next(Boolean(Math.abs(selectedText.anchorOffset - selectedText.focusOffset)));
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
            </div>
        );
    }

    componentDidMount() {
        content$.subscribe(content => this.setState({ content }));
    }
}
FileZone.defaultProps = { content: '' };

