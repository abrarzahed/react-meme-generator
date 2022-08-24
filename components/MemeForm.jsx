export default function MemeForm() {
  return (
    <main className="app-content">
      <form>
        <div className="inputs">
          <input type="text" id="setup" placeholder="Setup" />
          <input type="text" id="punchline" placeholder="Punchline" />
        </div>
        <div className="actions">
          <input type="submit" value="Get a new meme image  🖼" />
        </div>
      </form>

      <div className="meme"></div>
    </main>
  );
}
