import { useState } from "react";
import memesData from "../memesData";

export default function MemeForm() {
  const memesArray = memesData.data.memes;
  const [memeImage, setMemeImage] = useState("");

  const getMemeImage = function (e) {
    e.preventDefault();
    const randomMeme = Math.floor(Math.random() * memesArray.length);
    setMemeImage(memesArray[randomMeme].url);
  };

  //   console.log(data);
  return (
    <main className="app-content">
      <form>
        <div className="inputs">
          <input type="text" id="setup" placeholder="Setup" />
          <input type="text" id="punchline" placeholder="Punchline" />
        </div>
        <div className="actions">
          <input
            onClick={getMemeImage}
            type="submit"
            value="Get a new meme image  🖼"
          />
        </div>
      </form>

      <div className="meme">
        <img src={memeImage} alt="" />
      </div>
    </main>
  );
}
