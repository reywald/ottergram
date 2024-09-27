import "./App.css";
import Barry from "./assets/otters/otter1.jpg";
import Robin from "./assets/otters/otter2.jpg";
import Maurice from "./assets/otters/otter3.jpg";
import Lesley from "./assets/otters/otter4.jpg";
import Barbara from "./assets/otters/otter5.jpg";

function App() {
  return (
    <div>
      <header className="header-component">
        <h1>Ottergram</h1>
        <h3>A photo-sharing for sea otters, some of the most charming marine animals</h3>
      </header>

      <ul className="post-list">
        <li className="post-component">
          <button>
            <img src={Barry} alt="Barry" />
            <p>Barry</p>
          </button>
        </li>
        <li className="post-component">
          <button>
            <img src={Robin} alt="Robin" />
            <p>Robin</p>
          </button>
        </li>
        <li className="post-component">
          <button>
            <img src={Maurice} alt="Maurice" />
            <p>Maurice</p>
          </button>
        </li>
        <li className="post-component">
          <button>
            <img src={Lesley} alt="Barry" />
            <p>Barry</p>
          </button>
        </li>
        <li className="post-component">
          <button>
            <img src={Barbara} alt="Barbara" />
            <p>Barbara</p>
          </button>
        </li>
      </ul>
    </div>
  );
}

export default App;
