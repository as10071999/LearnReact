import { useState, useEffect } from "react";
import ReactImageDot from "./components/ReactImageDot";
import DotsInfo from "./components/DotsInfo";

function Image() {
  const [image, setImage] = useState({ preview: "", raw: "" });
  const [dots, setdots] = useState([]);

  const addDot = (dot) => {
    setdots((prev) => {
      return [...prev, dot];
    });
  };
  const deleteDot = (index) => {
    setdots((prev) => {
      return prev.filter((e, i) => {
        return i != index;
      });
    });
  };
  const handleChange = (e) => {
    if (e.target.files.length) {
      setImage({
        preview: URL.createObjectURL(e.target.files[0]),
        raw: e.target.files[0],
      });
    }
  };
  useEffect(() => {
    console.log(dots);
    console.log(dots.length);
  });
  const handleUpload = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("image", image.raw);
    console.log(formData);
    // await fetch("YOUR_URL", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "multipart/form-data",
    //   },
    //   body: formData,
    // });
  };
  return (
    <>
      <div>
        <input type="file" id="upload-button" onChange={handleChange} />
        <br />
        <button onClick={() => setImage({ preview: "", raw: "" })}>
          Close
        </button>
        <button onClick={handleUpload}>Upload</button>
      </div>
      <ReactImageDot
        backgroundImageUrl={image.preview}
        width={480}
        height={480}
        dots={dots}
        deleteDot={deleteDot}
        addDot={addDot}
        dotRadius={6}
        dotStyles={{
          backgroundColor: "red",
          boxShadow: "0 2px 4px gray",
        }}
        backgroundSize={"cover"}
      />
      <DotsInfo height={480} width={480} dots={dots} deleteDot={deleteDot} />
    </>
  );
}
export default Image;
