import { useState } from "react";

import "./styles/layout.css";
import { BinocularsIcon } from "lucide-react";

import InstagramGallery from "./components/InstagramGallery";

import styles from "./styles/demo.module.css";

function App() {
  const [showComponent, setShowComponent] = useState(false);

  return (
    <main className="main-container">
      {showComponent ? (
        <InstagramGallery />
      ) : (
        <button onClick={() => setShowComponent(!showComponent)}>
          <BinocularsIcon className={styles.buttonIcon} />
          <span>Render View</span>
        </button>
      )}
    </main>
  );
}

export default App;
