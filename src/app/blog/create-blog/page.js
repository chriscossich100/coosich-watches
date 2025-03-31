"use client";

import ExampleDocument from "../../lib/example-document";
import React, { useCallback, useMemo, useState, useEffect } from "react";
import { createEditor, Editor, Transforms, Element, Range } from "slate";
import { Slate, Editable, withReact, useSlate } from "slate-react";

import "font-awesome/css/font-awesome.min.css";
import Toolbar from "../blog-components/toolbar";
import BlogInfo from "../blog-components/blogInfo";
import styles from "./create-blog.module.css";

// function renderElement(props) {
//   console.log("renderElement props: ", props);
//   const { element, children, attributes } = props;
//   switch (element.type) {
//     case "h1":
//       return <h1 {...attributes}>{children}</h1>;
//     case "h2":
//       return <h2 {...attributes}>{children}</h2>;
//     case "h3":
//       return <h3 {...attributes}>{children}</h3>;
//     case "h4":
//       return <h4 {...attributes}>{children}</h4>;
//     default:
//       return <DefaultElement {...props} />;
//   }
// }

//renders the code element React component. In other words a block that is a code block

// const CodeElement = (props) => {
//   console.log("the props.attritbutes are: ", props.attributes);
//   return (
//     <pre {...props.attributes}>
//       <code>{props.children}</code>
//     </pre>
//   );
// };

// //React component for default elements:
// const DefaultElement = (props) => {
//   console.log('here, in the default Element, the props are: ', props);
//   return <p {...props.attributes}>{props.children}</p>;
// };

// const ImageUpload = ({ onImageUpload }) => {
//   const handleFileChange = (event) => {
//     const file = event.target.files[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.onloadend = () => {
//         console.log("the result of the reader is: ", reader.result);
//         onImageUpload(reader.result);
//       };
//       reader.readAsDataURL(file);
//     }
//   };

//   return <input type="file" accept="image/*" onChange={handleFileChange} />;
// };

const withImages = (editor) => {
  const { insertData, isVoid } = editor;
  editor.isVoid = (element) => {
    return element.type === "image" ? true : isVoid(element);
  };

  return editor;
};

//this is the image component.
const Image = (props, editor) => {
  const { attributes, children, element } = props;

  return (
    <div
      contentEditable={false}
      {...attributes}
      style={{ textAlign: "center" }}
    >
      <img
        style={{ display: "inline" }}
        src={element.url}
        alt={"this is a picture"}
      ></img>
      {children}
    </div>
  );
};

function CodeElement(props, editor) {
  const { attributes, children, element } = props;
  console.log("just checking to see if this works!");
  switch (element.type) {
    case "div":
      return (
        <div contentEditable={false} {...attributes}>
          {children}
        </div>
      );

    case "link":
      return (
        <a {...attributes} href={element.url}>
          {children}
        </a>
      );
    case "ordered-list":
      return (
        <ol
          style={{
            listStyleType: "decimal",
            marginBlockEnd: "16px",
            marginBlockStart: "16px",
            paddingInlineStart: "40px",
          }}
          {...attributes}
        >
          {children}
        </ol>
      );

    case "unordered-list":
      return (
        <ul
          style={{
            listStyleType: "disc",
            marginBlockEnd: "16px",
            marginBlockStart: "16px",
            paddingInlineStart: "40px",
          }}
          {...attributes}
        >
          {children}
        </ul>
      );

    case "list-item":
      return <li {...attributes}>{children}</li>;

    case "heading-1":
      return <h1 {...attributes}>{children}</h1>;

    case "heading-2":
      return <h2 {...attributes}>{children}</h2>;

    case "heading-3":
      return <h3 {...attributes}>{children}</h3>;

    case "h4":
      return <h4 {...attributes}>{children}</h4>;

    case "h5":
      return <h5 {...attributes}>{children}</h5>;

    case "code":
      return (
        <pre {...attributes}>
          <code>{children}</code>
        </pre>
      );

    case "span":
      return <span {...attributes}>{children}</span>;

    case "image":
      return <Image {...props} editor={editor} />;

    default:
      return <p {...attributes}>{children}</p>;
  }
}

//this is a React component aka a leaf component to render leaves with bold text.
//*Note: its described with a span tag. This is because all leaves must be an inline element
function RenderLeaf(props) {
  const { attributes, children, leaf } = props;

  let el = <>{children}</>;

  if (leaf.bold) {
    el = <strong>{el}</strong>;
  }

  if (leaf.code) {
    el = <code>{el}</code>;
  }

  if (leaf.italic) {
    el = <em>{el}</em>;
  }

  if (leaf.underline) {
    el = <u>{el}</u>;
  }

  return <span {...attributes}>{el}</span>;
}
export default function CreateBlogPage() {
  const editor = useMemo(() => withImages(withReact(createEditor())), []);

  console.log("this is the person you are supposed to love");

  const initialValue = useMemo(
    () => JSON.parse(localStorage.getItem("content")) || [{ type: "paragraph", children: [{ text: "" }] }],
    []
  )

  //define an element rendering function that is memorized with 'useCallBack'
  const renderElement = useCallback((props) => {
    return <CodeElement {...props} editor={editor} />;
  }, []);

  //define a leaf rendering function that is memorized with 'useCallBack'
  const renderLeaf = useCallback((props) => {
    return <RenderLeaf {...props} />;
  }, []);

  // const insertImage = (url) => {
  //   const text = { text: "" };

  //   // const divElement = {
  //   //   type: "div",
  //   //   children: [text],
  //   // };
  //   const image = [
  //     { type: "image", url, children: [text] },
  //     // { type: "span", children: [{ text: "Enter a caption" }] },
  //   ];
  //   Transforms.insertNodes(editor, image);

  //   Transforms.insertNodes(editor, {
  //     type: "paragraph",
  //     children: [{ text: "" }],
  //   });
  // };

  const CustomEditor = {
    isBoldMarkActive(editor) {
      const marks = Editor.marks(editor);
      return marks ? marks.bold === true : false;
    },
    isCodeBlockActive(editor) {
      const [match] = Editor.nodes(editor, {
        match: (n) => n.type === "code",
      });
      console.log("the match is: ", match, "and the !!math is: ", !!match);
      return !!match;
    },

    isItalicMarkActive(editor) {
      const marks = Editor.marks(editor);
      return marks ? marks.italic === true : false;
    },

    // Check if ordered list is active
    isOrderedListActive(editor) {
      const [match] = Editor.nodes(editor, {
        match: (n) => n.type === "ordered-list",
      });
      return !!match;
    },

    isUnorderedListActive(editor) {
      const [match] = Editor.nodes(editor, {
        match: (n) => n.type === "unordered-list",
      });
      return !!match;
    },

    isUnderlineMarkActive(editor) {
      const marks = Editor.marks(editor);
      return marks ? marks.underline === true : false;
    },

    toggleBoldMark(editor) {
      const isActive = CustomEditor.isBoldMarkActive(editor);
      if (isActive) {
        Editor.removeMark(editor, "bold");
      } else {
        Editor.addMark(editor, "bold", true);
      }
    },
    toggleCodeBlock(editor) {
      const isActive = CustomEditor.isCodeBlockActive(editor);
      console.log("isActive: ", isActive);
      Transforms.setNodes(
        editor,
        { type: isActive ? null : "code" },
        { match: (n) => Element.isElement(n) && Editor.isBlock(editor, n) }
      );
    },

    toggleItalicMark(editor) {
      const isActive = CustomEditor.isItalicMarkActive(editor);
      if (isActive) {
        Editor.removeMark(editor, "italic");
      } else {
        Editor.addMark(editor, "italic", true);
      }
    },

    toggleUnderlineMark(editor) {
      const isActive = CustomEditor.isUnderlineMarkActive(editor);
      if (isActive) {
        Editor.removeMark(editor, "underline");
      } else {
        Editor.addMark(editor, "underline", true);
      }
    },
    // insertImages(editor, url) {
    //   const text = { text: "" };
    //   const image = [{ type: "image", url, children: [text] }, { type: "paragraph", children: [{ text: "" }] }];
    //   Transforms.insertNodes(editor, image);
    // }

    // Toggle ordered list
    toggleOrderedList(editor) {
      const isActive = CustomEditor.isOrderedListActive(editor);

      //this checks to see if the unordered list is active
      const hasUnorderedList = CustomEditor.isUnorderedListActive(editor);

      //if active (unordered list), unwrap the unordered list to convert it back to paragraphs to be changed to ordered list
      if (hasUnorderedList) {
        Transforms.unwrapNodes(editor, {
          match: (n) => n.type === "unordered-list",
          split: true,
        });
      }

      if (isActive) {
        // If it's active, unwrap the list to convert it back to paragraphs
        Transforms.unwrapNodes(editor, {
          match: (n) => n.type === "ordered-list",
          split: true,
        });
        Transforms.setNodes(editor, {
          type: "paragraph",
          children: [{ text: "" }],
        });
      }
      // If we are turning on the ordered list
      else {
        // If we're turning on the ordered list
        Transforms.wrapNodes(editor, { type: "ordered-list", children: [] });
        Transforms.setNodes(editor, {
          type: "list-item",
          children: [{ text: "" }],
        });
      }
    },

    toggleUnorderedList() {
      const isActive = CustomEditor.isUnorderedListActive(editor);

      // Check if the ordered list is active
      const hasOrderedList = CustomEditor.isOrderedListActive(editor);

      if (hasOrderedList) {
        // Unwrap the ordered list to convert it back to paragraphs
        Transforms.unwrapNodes(editor, {
          match: (n) => n.type === "ordered-list",
          split: true,
        });
      }

      if (isActive) {
        // If it's active, unwrap the list to convert it back to paragraphs
        Transforms.unwrapNodes(editor, {
          match: (n) => n.type === "unordered-list",
          split: true,
        });
        Transforms.setNodes(editor, {
          type: "paragraph",
          children: [{ text: "" }],
        });
      } else {
        // If we're turning on the unordered list
        Transforms.wrapNodes(editor, { type: "unordered-list", children: [] });
        Transforms.setNodes(editor, {
          type: "list-item",
          children: [{ text: "" }],
        });
      }
    },
  };

  //Event handler for on key pressed events:
  const onKeyDownEvent = (event) => {
    if (!event.ctrlKey) {
      console.log("the key pressed is: ", event.key);
      if (event.key === "Enter") {
        event.preventDefault();

        // Check if the selection is within a list-item
        const [match] = Editor.nodes(editor, {
          match: (n) => n.type === "list-item",
        });

        if (match) {
          // Insert a new list item under the current one
          Transforms.insertNodes(editor, {
            type: "list-item",
            children: [{ text: "" }],
          });
        } else {
          console.log("im assuming we are getting here right");
          // Default behavior for other cases (e.g., plain paragraphs)
          Transforms.insertNodes(editor, {
            type: "paragraph",
            children: [{ text: "" }],
          });
        }
      }
      return;
    }

    switch (event.key) {
      case "`": {
        event.preventDefault();
        //determine whether any of the currently selected blocks are code blocks:
        // const [match] = Editor.nodes(editor, {
        //   match: (n) => n.type === "code",
        // });

        // //toggle the block type depneding on whether there's already a match:
        // Transforms.setNodes(
        //   editor,
        //   { type: match ? "paragraph" : "code" },
        //   { match: (n) => Element.isElement(n) && Editor.isBlock(editor, n) }
        // );
        CustomEditor.toggleCodeBlock(editor);
        break;
      }
      case "b": {
        event.preventDefault();
        //we use addMark to add our bold mark to the selected text:
        // Editor.addMark(editor, "bold", true);
        CustomEditor.toggleBoldMark(editor);
        break;
      }
      case "i": {
        event.preventDefault();
        // Editor.addMark(editor, "italic", true);
        CustomEditor.toggleItalicMark(editor);
        break;
      }

      case "u": {
        event.preventDefault();
        // Editor.addMark(editor, "underline", true);
        CustomEditor.toggleUnderlineMark(editor);
        break;
      }
    }
  };

  return (
    <div
      className={styles.create_blog_container}
      style={{ paddingTop: "40px" }}
    >
      <BlogInfo>
        {/* this is the slate context provider */}
        <Slate
          editor={editor}
          initialValue={initialValue}
          onChange={(value) => {
            const isAstChange = editor.operations.some((op) => {
              return "set_selection" !== op.type;
            });
            if (isAstChange) {
              const content = JSON.stringify(value);
              localStorage.setItem("content", content);
            }
          }}
        >
          <Toolbar editor={editor} />
          {/* <div
          
        >
          <ImageUpload onImageUpload={insertImage} />
        </div> */}
          <Editable
            renderElement={renderElement}
            renderLeaf={renderLeaf}
            onKeyDown={onKeyDownEvent}
            placeholder="Enter your blog content here..."
            autoFocus
          />
        </Slate>
      </BlogInfo>
    </div>
  );
}
