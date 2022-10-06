import styles from "./App.module.css";
import Header from "./Header";

function App() {
  return (
    <div>
      <div className={styles.container}>
        <Header />
      </div>
    </div>
  );
}

export default App;
