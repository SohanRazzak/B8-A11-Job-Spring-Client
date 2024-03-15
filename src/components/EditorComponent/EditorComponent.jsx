
import SimpleMDEEditor from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import { PropTypes } from "prop-types";
import { useState } from "react";

const EditorComponent = ({className, controllState}) => {
    const [editorText, setEditorText] = controllState;
    const [isFocused, setIsFocused] = useState(false)

    const handleChange = (newValue) => {
        setIsFocused(true)
        setEditorText(newValue);
    };

    return (
        <div className={className}>
            <SimpleMDEEditor
                value={editorText}
                onChange={handleChange}
                options={{
                    autofocus: isFocused,
                    spellChecker: false,
                    placeholder: "Enter your job description (markdown supported)...",
                }}
            />
        </div>
    );
};

EditorComponent.propTypes = {
    className: PropTypes.string,
    controllState: PropTypes.array
}

export default EditorComponent;
