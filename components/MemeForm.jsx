import { useState } from "react";
import memesData from "../memesData";

export default function MemeForm() {
  const memesArray = memesData.data.memes;

  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  });

  const [allMemeImages, setAllMemeImages] = useState(memesArray);

  const getMemeImage = function (e) {
    e.preventDefault();

    const randomMeme = Math.floor(Math.random() * allMemeImages.length);

    setMeme((prev) => ({
      ...prev,
      randomImage: allMemeImages[randomMeme].url,
    }));
  };

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
            value="Get a new meme image 🖼"
          />
        </div>
      </form>

      <div className="meme">
        <img src={meme.randomImage} alt="" />
      </div>
    </main>
  );
}
