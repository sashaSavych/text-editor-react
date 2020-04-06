import {BehaviorSubject} from "rxjs";

const baseUrl = 'https://api.datamuse.com/words?rel_syn=';

const suggestionsSource = new BehaviorSubject(null);
export const suggestions$ = suggestionsSource.asObservable();

export const fetchSynonyms = (currentWord) => {
    if (!currentWord) {
        suggestionsSource.next(null)
        return;
    }

    fetch(`${baseUrl}${currentWord}`)
        .then(res => res.json())
        .then(results => results.map(result => result.word))
        .then(data => suggestionsSource.next(data))
        .catch(console.error)
};
