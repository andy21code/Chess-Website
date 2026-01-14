import '../style/Home.css';

function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero">
        <img
          className="hero-img"
          src="src/assets/Chess_game_Staunton_No._6.jpg"
          alt="Chess Board"
        />

        <div className="hero-text">
          <h1>Welcome to the World of Chess</h1>
          <p>
            Chess is a classic strategy board game played by two players on an
            8×8 board. Each player controls 16 pieces: a king, queen, rooks,
            bishops, knights, and pawns.
          </p>
        </div>
      </section>

      {/* Intro Section */}
      <section className="intro">
        <p>
          The main goal of chess is to checkmate your opponent’s king — putting
          the king in a position where it cannot escape capture. Chess rewards
          critical thinking, planning, patience, and creativity.
        </p>

        <p>
          People of all ages enjoy chess because it improves concentration and
          problem-solving skills. Whether played casually or competitively,
          chess remains one of the most respected strategy games in the world.
        </p>
      </section>

      {/* Flip Text Section */}
      <section className="action">
        <div id="container">
          Let’s
          <div id="flip">
            <div><div>Study</div></div>
            <div><div>Play</div></div>
            <div><div>Watch</div></div>
          </div>
          Chess
        </div>
        
      </section>
    </>
  );
}

export default Home;

