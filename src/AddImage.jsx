import react from "react";
import Image from "./Image";
import { useState, useEffect, useRef } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ReactImageDot from "./components/ReactImageDot";
import DotsInfo from "./components/DotsInfo";

function AddImage(prop) {
  const { org, count, increaseCount } = prop;
  console.log("New AddImage Created", org, count);

  const imageRef = useRef(null);
  const [image, setImage] = useState({
    id: "",
    preview: "",
    raw: "",
    sensors: [],
    images: [],
  });
  const [isUpload, setIsUpload] = useState(false);

  const handleUpload = async (e) => {
    e.preventDefault();

    if (imageRef.current.value) {
      console.log(imageRef.current.files[0]);
      setImage({
        id: count,
        preview: URL.createObjectURL(imageRef.current.files[0]),
        raw: imageRef.current.files[0],
      });
      increaseCount();
      const formData = new FormData();
      formData.append("image", image.raw);

      // await fetch("YOUR_URL", {
      //   method: "POST",
      //   headers: {
      //     "Content-Type": "multipart/form-data",
      //   },
      //   body: formData,
      // });
      setIsUpload(true);
    }
  };
  const handleDelete = (e) => {
    setImage({ preview: "", raw: "" });
    imageRef.current.value = "";
    setIsUpload(false);
  };
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
  return (
    <>
      <Router>
        {!isUpload && (
          <div>
            <input type="file" id="upload-button" ref={imageRef} />
            <br />
            <section>
              <button onClick={handleDelete}>Close</button>
              <button onClick={handleUpload} type="submit">
                Upload
              </button>
            </section>
          </div>
        )}
        {isUpload && (
          <div>
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
            <DotsInfo
              height={480}
              width={480}
              dots={dots}
              deleteDot={deleteDot}
              pid={image.id}
              count={count}
              increaseCount={increaseCount}
            />
          </div>
        )}

        <Route path="/image/:id">
          <Image></Image>
          {/* <AddImage org={org} count={count} increaseCount={increaseCount} /> */}
        </Route>
      </Router>
    </>
  );
}

export default AddImage;
