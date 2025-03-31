"use client";

import { useMemo, useCallback } from "react";
import { createEditor, Editor, Transforms, Element, Range } from "slate";
import { Slate, Editable, withReact, useSlate } from "slate-react";
import styles from "./blogContent.module.css";

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
    case "image":
      return <Image {...props} editor={editor} />;

    default:
      return <p {...attributes}>{children}</p>;
  }
}

export default function BlogContent({ blogContent }) {
  const { title, subtitle, author, dateuploaded, bannerimagepath, content } =
    blogContent;
  console.log("the content is: ", content);
  const editor = useMemo(() => withImages(withReact(createEditor())), []);

  const initialValue = useMemo(
    () =>
      JSON.parse(content) || [{ type: "paragraph", children: [{ text: "" }] }],
    []
  );

  //define an element rendering function that is memorized with 'useCallBack'
  const renderElement = useCallback((props) => {
    return <CodeElement {...props} editor={editor} />;
  }, []);

  return (
    <section>
      <div className={styles.article_header}>
        <img
          className={styles.article_feat_img}
          src={`http://localhost:3030/${bannerimagepath}`}
        ></img>
      </div>

      <div className={styles.blog_containerPad}>
        <div className="article_body">
          <div className={styles.article_header_content}>
            <div className={styles.article_header_actions}></div>
            <h1 className={styles.article_header_h1}>{title}</h1>
            <p className={styles.article_header_subtitle}>{subtitle}</p>
          </div>
          <div className={styles.article_author}>
            <div className={styles.article_author_info}>
              <div>
                <span className={styles.article_author_caption}>{author}</span>
                <span
                  className={
                    styles.article_author_caption +
                    " " +
                    styles.article_author_date
                  }
                >
                  {dateuploaded}
                </span>
              </div>
            </div>
          </div>
          <div>
            <Slate editor={editor} initialValue={initialValue}>
              <Editable readOnly renderElement={renderElement} />
            </Slate>
          </div>
        </div>
      </div>
    </section>
  );
}
