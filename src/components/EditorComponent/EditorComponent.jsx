
import SimpleMDEEditor from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import { PropTypes } from "prop-types";

const EditorComponent = ({className, controllState}) => {
    const [editorText, setEditorText] = controllState;

    const handleChange = (newValue) => {
        setEditorText(newValue);
    };

    return (
        <div className={className}>
            <SimpleMDEEditor
                value={editorText}
                onChange={handleChange}
                options={{
                    autofocus: true,
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
