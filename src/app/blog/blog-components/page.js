"use client";
import ExampleDocument from "../../lib/example-document";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import { createEditor, Editor, Transforms, Element, Node } from "slate";
import { Slate, Editable, withReact } from "slate-react";
import CodeElement, { RenderLeaf } from "./codeElement";
import Toolbar from "./toolbar";

const App = () => {
  const [editor] = useState(() => withReact(createEditor()));
  // Update the initial content to be pulled from Local Storage if it exists.
  const initialValue = useMemo(
    () => JSON.parse(localStorage.getItem("content")) || ExampleDocument,
    []
  );

  const renderElement = useCallback((props) => {
    console.log("are we even getting here!!!");
    return <CodeElement {...props} />;
  }, []);

  const renderLeaf = useCallback((props) => {
    return <RenderLeaf {...props} />;
  }, []);

  return (
    <div className="main_containerPad" style={{ paddingTop: "40px" }}>
      <Slate
        editor={editor}
        initialValue={initialValue}
        onChange={(value) => {
          const isAstChange = editor.operations.some(
            (op) => "set_selection" !== op.type
          );
          if (isAstChange) {
            // Save the value to Local Storage.
            const content = JSON.stringify(value);
            localStorage.setItem("content", content);
          }
        }}
      >
        <Editable renderElement={renderElement} renderLeaf={renderLeaf} placeholder = "Enter some rich text here" />
      </Slate>
    </div>
  );
};

export default App;

// "use client";

// import ExampleDocument from "../../lib/example-document";
// import React, { useEffect, useMemo, useState } from "react";
// import { createEditor, Editor, Transforms, Element } from "slate";
// import { Slate, Editable, withReact } from "slate-react";

// const App = () => {
//   const [initialValue, setInitialValue] = useState(ExampleDocument); // Set default value to ExampleDocument
//   const [editor] = useState(() => withReact(createEditor()));

//   console.log("This is the beginning of the app");

//   useEffect(() => {
//     console.log("This is the useEffect hook");
//     const value = localStorage.getItem("content");
//     if (value) {
//       console.log("We got here because there is a value, and it's:", value);
//       try {
//         const parsedValue = JSON.parse(value); // Parse JSON safely
//         setInitialValue(parsedValue); // Update initialValue with parsed data
//       } catch (error) {
//         console.error("Error parsing JSON from localStorage:", error);
//         // Optionally handle the error or fallback to a default
//       }
//     }
//     console.log(
//       "At the end of the useEffect hook, the initialValue is:",
//       initialValue
//     );
//   }, []); // Empty dependency array ensures this runs once on mount

//   const parsedData = useMemo(() => {
//     console.log(
//       "This is the parsedData useMemo hook and the initialValue is:",
//       initialValue
//     );
//     return initialValue; // Return the current initialValue directly
//   }, [initialValue]); // This will only run when initialValue changes

//   console.log('fdjksla;fjdkl;sa')

//   return (
//     <div className="main_containerPad" style={{ paddingTop: "40px" }}>
//       <Slate
//         editor={editor}
//         initialValue={parsedData} // Use parsedData for initial value
//         onChange={(value) => {
//           const isAstChange = editor.operations.some((op) => {
//             return "set_selection" !== op.type;
//           });
//           if (isAstChange) {
//             const content = JSON.stringify(value);
//             localStorage.setItem("content", content); // Save updated content to localStorage
//           }
//         }}
//       >
//         <Editable />
//       </Slate>
//     </div>
//   );
// };

// export default App;

// "use client";

// import ExampleDocument from "../../lib/example-document";
// import React, { useEffect, useCallback, useMemo, useState } from "react";
// import { createEditor, Editor, Transforms, Element } from "slate";
// import { Slate, Editable, withReact } from "slate-react";

// const app = () => {
//   const [initialValue, setInitialValue] = useState(null);
//   const [editor] = useState(() => withReact(createEditor()));
//   console.log("ths is the beginning of the app");
//   useEffect(() => {
//     console.log("this is the useEffect hook");
//     const value = localStorage.getItem("content");
//     if (value) {
//       console.log("we got here because there is a value and its ", value);
//       setInitialValue(value);
//     }
//     console.log(
//       "at the end of the useEffect hook, the initialValue is: ",
//       initialValue
//     );
//   }, []);

//   const parsedData = useMemo(() => {
//     console.log(
//       "this is the parsedData useMemo hook and the initialValue is: ",
//       initialValue
//     );
//     if (initialValue != null) {
//       console.log(
//         "we got here because the initialValue is not null and json.parse is: ",
//         JSON.parse(initialValue)
//       );
//       return JSON.parse(initialValue);
//     }
//     return ExampleDocument;
//   }, [initialValue]); //this hook will only run when the initialValue changes

//   return (
//     <div className="main_containerPad" style={{ paddingTop: "40px" }}>
//       <Slate
//         editor={editor}
//         initialValue={parsedData}
//         onChange={(value) => {
//           const isAstChange = editor.operations.some((op) => {
//             return "set_selection" !== op.type;
//           });
//           if (isAstChange) {
//             const content = JSON.stringify(value);
//             localStorage.setItem("content", content);
//           }
//         }}
//       >
//         <Editable />
//       </Slate>
//     </div>
//   );
// };
// export default app;
