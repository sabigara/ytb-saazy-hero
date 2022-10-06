import styles from "./App.module.css";
import Header from "./Header";
import HeroSection from "./HeroSection";
import LogoCloud from "./LogoCloud";

function App() {
  return (
    <div className={styles.background}>
      <div className={styles.container}>
        <Header />
        <HeroSection />
        <LogoCloud />
      </div>
    </div>
  );
}

export default App;
