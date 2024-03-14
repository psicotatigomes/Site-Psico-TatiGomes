import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import "./styles.scss";

const EditorComponent = (props) => {
  return <Editor {...props} />;
};

export default EditorComponent;
