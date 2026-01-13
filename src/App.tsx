import { BackgroundBlobs } from './components/background/BackgroundBlobs';
import { Header } from './components/layout/Header';

function App() {
  return (
    <div className="relative flex min-h-screen w-full flex-col">
      <BackgroundBlobs />
      <Header />
    </div>
  );
}

export default App;
