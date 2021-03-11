import React from 'react';
import { RadioInput } from '../components/Widgets/RadioInput';
import {ShortFreeText} from '../components/Widgets/ShortFreeText';

const Components = {
    text: ShortFreeText,
    radio: RadioInput
};

const Builder = ({ content, id, isPreview }) => {
    if (typeof Components[content?.type] !== 'undefined') {
        return React.createElement(Components[content?.type], {
            content: { ...content, id, isPreview },
            key: id,
        });
    }
    return React.createElement(
        () => (
            null
        ),
        { key: id }
    );
};

export default Builder