import { useEffect, useState } from "react";
import Home from "./pages/Home";
import Loader from "./components/Loader";
import { ThemeProvider } from "./components/ThemeContext";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <ThemeProvider>
      <div className="bg-white text-black dark:bg-black dark:text-white transition-colors duration-500 min-h-screen">
        {loading ? <Loader /> : <Home />}
      </div>
    </ThemeProvider>
  );
}

export default App;