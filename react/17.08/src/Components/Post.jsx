import React from "react";

function Post({ title, text, img, marked }) {
  // console.log(props);
  //   const title = "Book";
  //   const text = "Kafka";
  //   const img =
  //     "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Kafka1906_cropped.jpg/274px-Kafka1906_cropped.jpg";

  //   const marked = false;

  return (
    <div>
      <h1
        style={{
          color: "red",
          backgroundColor: marked ? "gray" : "azure",
        }}
      >
        {title}
      </h1>
      <p>{text}</p>
      <img src={img} alt="Franz Kafka" />
    </div>
  );
}

export default Post;
// rfce
