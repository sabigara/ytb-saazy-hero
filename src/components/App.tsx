import styles from "./App.module.css";
import Header from "./Header";
import HeroSection from "./HeroSection";

function App() {
  return (
    <div className={styles.background}>
      <div className={styles.container}>
        <Header />
        <HeroSection />
      </div>
    </div>
  );
}

export default App;
