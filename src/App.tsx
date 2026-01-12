import { Header } from './layout/Header';
import { Footer } from './layout/Footer';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">Testing</main>
      <Footer />
    </div>
  );
}

export default App;
