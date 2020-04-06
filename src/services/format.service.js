import {getSelectedText, toggleSelectionFormat} from "./text.service";

// region Public
export const saveFormatState = (format) => {
    toggleSelectionFormat(format);

    if (isFormatApplied(format)) {
        removeFormat(format);
    } else {
        applyFormat(format);
    }
};

export const getFormatsForFocusNode = () => {
    const { focusNode } = getSelectedText();

    return formatStore.get(focusNode);
};
// endregion Public

// region Private
const formatStore = new Map();

const isFormatApplied = (format) => {
    const focusNodeFormats = getFormatsForFocusNode();

    return focusNodeFormats && focusNodeFormats.includes(format);
};

const applyFormat = (format) => {
    const { focusNode } = getSelectedText();
    const focusNodeFormats = formatStore.get(focusNode);

    if (focusNodeFormats) {
        formatStore.set(focusNode, [...focusNodeFormats, format]);
    } else {
        formatStore.set(focusNode, [format]);
    }
};

const removeFormat = (format) => {
    const { focusNode } = getSelectedText();
    const focusNodeFormats = formatStore.get(focusNode);

    if (focusNodeFormats.length > 1) {
        const index = focusNodeFormats.indexOf(format);

        if (index !== -1) focusNodeFormats.splice(index, 1);

        formatStore.set(focusNode, focusNodeFormats);
    } else {
        formatStore.delete(focusNode);
    }
};
// endregion Private
