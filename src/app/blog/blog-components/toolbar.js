import "font-awesome/css/font-awesome.min.css";
import "./toolbar.css";
import { Editor, Transforms } from "slate";
import { useSlate } from "slate-react";

const Toolbar = ({ editor }) => {
  const rightNow = useSlate();

  const ImageUpload = ({ onImageUpload }) => {
    const handleFileChange = (event) => {
      const file = event.target.files[0];
      console.log("the file is: ", file);
      if (file) {
        const reader = new FileReader();
        reader.onloadend = () => {
          console.log("the result of the reader is: ", reader.result);
          onImageUpload(reader.result);
        };
        reader.readAsDataURL(file);
      }
    };

    return (
      <div>
        <label htmlFor="blog-image">
          <input id = "blogImages" name="blog-image" type="file" accept="image/*" onChange={handleFileChange} style = {{display: 'none'}} />
          {renderButton("image", "upload", true)}
        </label>
      </div>
    );
  };

  const insertImage = (url) => {
    const text = { text: "" };

    // const divElement = {
    //   type: "div",
    //   children: [text],
    // };
    const image = [
      { type: "image", url, children: [text] },
      // { type: "span", children: [{ text: "Enter a caption" }] },
    ];
    Transforms.insertNodes(editor, image);

    Transforms.insertNodes(editor, {
      type: "paragraph",
      children: [{ text: "" }],
    });
  };

  const isMarkActive = (format) => {
    const marks = Editor.marks(editor);
    return marks ? marks[format] === true : false;
  };

  const toggleMark = (format) => {
    event.preventDefault();
    const isActive = isMarkActive(format);
    isActive
      ? Editor.removeMark(editor, format)
      : Editor.addMark(editor, format, true);
  };

  const isEditorBlockActive = (format) => {
    const [match] = Editor.nodes(editor, { match: (n) => n.type === format });
    return !!match;
  };

  const toggleBlock = (format) => {
    const isActive = isEditorBlockActive(format);
    const headingTypes = ["heading-1", "heading-2", "heading-3"];
    const listTypes = ["ordered-list", "unordered-list"];

    if (listTypes.includes(format)) {
      const oppositeFormat =
        format === "ordered-list" ? "unordered-list" : "ordered-list";
      if (isEditorBlockActive(oppositeFormat)) {
        Transforms.unwrapNodes(editor, {
          match: (n) => n.type === oppositeFormat,
          split: true,
        });
        Transforms.setNodes(editor, { type: "paragraph" });
      }

      if (isActive) {
        Transforms.unwrapNodes(editor, {
          match: (n) => n.type === format,
          split: true,
        });
        Transforms.setNodes(editor, { type: "paragraph" });
      } else {
        if (listTypes.includes(format)) {
          Transforms.wrapNodes(editor, { type: format, children: [] });
          Transforms.setNodes(editor, { type: "list-item" });
        } else {
          Transforms.setNodes(editor, { type: format });
        }
      }
    }

    if (headingTypes.includes(format)) {
      if (isActive) {
        Transforms.setNodes(editor, { type: "paragraph" });
      } else {
        Transforms.setNodes(editor, { type: format });
      }
    }
  };

  const renderButton = (format, icon, block = false) => (
    <button
      onMouseDown={
        format != "image"
          ? (event) => {
              event.preventDefault();
              block ? toggleBlock(format) : toggleMark(format);
            }
          : () => document.getElementById('blogImages').click()
      }
      className={
        block
          ? isEditorBlockActive(format)
            ? "active"
            : ""
          : isMarkActive(format)
          ? "active"
          : ""
      }
    >
      <i className={`fa fa-${icon}`}>
        {format.includes("heading") && ` ${format.split("-")[1]}`}
      </i>
    </button>
  );

  return (
    <div className="toolbar">
      {renderButton("bold", "bold")}
      {renderButton("italic", "italic")}
      {renderButton("underline", "underline")}
      {renderButton("code", "code")}
      {renderButton("heading-1", "header", true)}
      {renderButton("heading-2", "header", true)}
      {renderButton("heading-3", "header", true)}
      {renderButton("ordered-list", "list-ol", true)}
      {renderButton("unordered-list", "list-ul", true)}
      {/* {renderButton("image", "upload", true)} */}
      <ImageUpload onImageUpload={insertImage} />
    </div>
  );
};

export default Toolbar;
