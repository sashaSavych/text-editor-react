import { BehaviorSubject } from "rxjs";

export const mockText = 'A year ago I was in the audience at a gathering of designers in San Francisco. There were four designers on stage, and two of them worked for me. I was there to support them. The topic of design responsibility came up, possibly brought up by one of my designers, I honestly don’t remember the details. What I do remember is that at some point in the discussion I raised my hand and suggested, to this group of designers, that modern design problems were very complex. And we ought to need a license to solve them.';

const isTextSelectedSource = new BehaviorSubject(false);
export const setTextSelectedSource = (newValue) => {
  isTextSelectedSource.next(newValue);
};
export const isTextSelected$ = isTextSelectedSource.asObservable();

export const getSelectedText = () => {
    return window.getSelection();
};

export const getSelectedString = () => {
    const selectedText = getSelectedText();

    if (selectedText.rangeCount === 0) {
        return '';
    }

    const range = selectedText.getRangeAt(0);
    return range.toString();
};

export const toggleSelectionFormat = (format) => {
    document.execCommand(format);
};

export const replaceSelectedTextWithSuggestion = (suggestion) => {
    document.execCommand('insertText', false, suggestion);
};
