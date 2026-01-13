import { BackgroundBlobs } from './components/background/BackgroundBlobs';
import { Header } from './components/layout/Header';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';

function App() {
  return (
    <div className="relative flex min-h-screen w-full flex-col">
      <BackgroundBlobs />
      <Header />

      <main className="flex flex-col items-center w-full px-4 md:px-10">
        <Hero />
        <About />
      </main>
    </div>
  );
}

export default App;
