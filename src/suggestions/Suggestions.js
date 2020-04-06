import React, {Component} from 'react';
import './Suggestions.scss';
import {fetchSynonyms, suggestions$} from "../api.service";

export default class Suggestions extends Component {
    constructor(props) {
        super(props);
        this.state = { suggestions: null };
    }

    componentWillReceiveProps(nextProps) {
        fetchSynonyms(nextProps.currentWord);
    }

    render() {
        let suggestionsContent = this.getSuggestionsContent(this.state.suggestions);

        return (
            <div id="suggestions">{suggestionsContent}</div>
        );
    }

    componentDidMount() {
        suggestions$.subscribe(suggestions => this.setState({ suggestions }));
    }

    getSuggestionsContent(suggestions) {
        if (!suggestions) {
            return <p>Select a word to generate synonyms...</p>;
        } else if(!suggestions.length) {
            return <div>
                <p>Unable to find any synonyms for a selected text :(</p>
                <p> Avoid using of phrases and plural forms.</p>
            </div>
        }

        return suggestions.map(suggestion => {
            return <span key={suggestion}>{suggestion}</span>
        })
    }
}
