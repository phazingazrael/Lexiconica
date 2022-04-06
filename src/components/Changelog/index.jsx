import React, { useState, useEffect } from "react";
import Markdown from "markdown-to-jsx";

function ChangeLog() {
  const file_name = "changelog.md";
  const [post, setPost] = useState("");

  useEffect(() => {
    import(`./${file_name}`)
      .then((res) => {
        fetch(res.default)
          .then((res) => res.text())
          .then((res) => setPost(res))
          .catch((err) => console.log(err));
      })
      .catch((err) => console.log(err));
  });
  return <Markdown>{post}</Markdown>;
}

export default ChangeLog;