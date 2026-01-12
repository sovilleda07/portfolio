import { BackgroundBlobs } from './layout/BackgroundBlobs';
import { Header } from './layout/Header';
import { Footer } from './layout/Footer';

function App() {
  return (
    <div className="relative min-h-screen w-full">
      <BackgroundBlobs />

      <div className="relative flex min-h-screen flex-col">
        <Header />
        <main className="flex-1"></main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
