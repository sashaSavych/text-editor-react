# `Task description`

## `Must have`
1. We need to see your own code. It is not permitted to apply and configure a ready-to-use component for text formatting. We need to see your own solution. However you can use other handy components and libraries.
2. User should be able to interact with words of text by some action like double-click or some other way, to select a word. When the word is selected, the user should have possibility to apply options for this word. For simplification we expect to select separate words only; it is not expected to support selection for a part of text.
3. Minimal required formatting list is Bold, Italic and Underline.
4. Formatting settings should be persisted into an in-memory model. When the user selects formatted word, the component should indicate, what formatting options are applied. So then a repetetive formatting application removes these styles (i.e. click bold-botton - get bold text, click bold-botton again - return text weight to normal). It should be possible to apply Bold, Italic and Underline to a word at the same time.
5. Besides formatting options, the user should be able to see synonyms for any word. For getting synonyms use https://www.datamuse.com/api/. Synonyms loading should be implemented out of the component and provided into the component in some way.
6. User should be able to replace a word with a synonym, while keeping all formatting settings.
7. The solution must be flexible and extendable, so new functionality can be added in the future.
8. Target completion time is 2 hours. We would rather see what you were able to do in 2 hours, than a full-blown solution you’ve spent days implementing. Note that in addition to quality, time used is also factored into scoring the task.

## `Nice to have`
1. The editor accepts text input, rather than works with a predefined block of text.
2. Word formatting should be extended by color setting.
3. It should be possible to do indentation for a block of text to one or several steps (i.e. tabulation). Take a look to Gmail editor to get the idea.

# `Application description`
The application renders text and has several features for text manipulation and formatting. Such as set of text to Bold/Italic/Underline and replacing of specific word with provided one of provided synonyms.

## `Demo`
![](demo.gif)

# `Technical details`
This project was based on predefined skeleton: https://bitbucket.org/agileengine/ae-frontend-texteditor-reactjs-skeleton/src/master/

## `Setup`
+ Run `npm install` in order to setup application
+ Run `npm start` for a dev server.

## `TODOs`
+ Implement state-based architecture (Flux of similar)
+ Cover functionality with unit-tests
+ Integrate Typescript/Flow and cover data with types
+ Review approach of using services
+ Extend functionality with 
    - formatting by color, font, tabulation
    - adding links
    - providing current markdown


