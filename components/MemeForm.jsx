import { useEffect, useState } from "react";

export default function MemeForm() {
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  });

  const [allMemes, setAllMemes] = useState([]);

  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((memesRes) => {
        setAllMemes(() => [...memesRes.data.memes]);
      });
  }, []);

  const getMemeImage = function (e) {
    e.preventDefault();
    const randomMeme = Math.floor(Math.random() * allMemes.length);
    const url = allMemes[randomMeme].url;
    setMeme(() => ({
      topText: "",
      bottomText: "",
      randomImage: url,
    }));
  };

  function updateMemeText(event) {
    const { name, value } = event.target;
    setMeme((prev) => ({ ...prev, [name]: value }));
  }

  return (
    <main className="app-content">
      <form>
        <div className="inputs">
          <input
            type="text"
            id="setup"
            placeholder="Setup"
            name="topText"
            value={meme.topText}
            onChange={updateMemeText}
          />
          <input
            type="text"
            id="punchline"
            placeholder="Punchline"
            name="bottomText"
            value={meme.bottomText}
            onChange={updateMemeText}
          />
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
        <h1 className="setup">{meme.topText}</h1>
        <img src={meme.randomImage} alt="" />
        <h1 className="punchline">{meme.bottomText}</h1>
      </div>
    </main>
  );
}
