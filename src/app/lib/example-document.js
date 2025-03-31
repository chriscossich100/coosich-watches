// const PARAGRAPH_STYLES = ["paragraph", "h1", "h2", "h3", "h4", "multiple"];
// const CHARACTER_STYLES = ["bold", "code", "italic", "underline"];

const ExampleDocument = [
  {
    type: "h1",
    children: [{ text: "This is a heading 1" }],
  },
  //   {
  //     type: "h2",
  //     children: [{ text: "This is a heading 2" }],
  //   },
  //   {
  //     type: "h3",
  //     children: [{ text: "This is a heading 3" }],
  //   },
  //   {
  //     type: "h4",
  //     children: [{ text: "This is a heading 4" }],
  //   },
  {
    type: "paragraph",
    children: [
      {
        text: "Hello World! This is my paragraph inside a sample document."
      },
        { text: "Bold text.", bold: true},
        { text: "Italic text.", italic: true },
        { text: "Bold and underlined text.", bold: true, underline: true },
      //   { text: "variableFoo", code: true },
    ],
  },
  {
    type: "link",
    url: "https://www.google.com",
    children: [{ text: "This is a link" }],
  },
];

export default ExampleDocument;
