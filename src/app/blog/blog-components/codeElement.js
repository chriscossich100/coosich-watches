export default function CodeElement(props) {
  const { attributes, children, element } = props;
  console.log(
    " the children found in the CodeElement component is: ",
    children
  );
  switch (element.type) {
    case "link":
      return (
        <a {...attributes} href={element.url}>
          {children}
        </a>
      );

    case "h1":
      return <h1 {...attributes}>{children}</h1>;

    case "h2":
      return <h2 {...attributes}>{children}</h2>;

    case "h3":
      return <h3 {...attributes}>{children}</h3>;

    case "h4":
      return <h4 {...attributes}>{children}</h4>;

    case "h5":
      return <h5 {...attributes}>{children}</h5>;

    default:
      return <p {...attributes}>{children}</p>;
  }
}


export function RenderLeaf(props) {
  const { attributes, children, leaf } = props;

  let el = <>{children}</>

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