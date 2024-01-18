import { Routes, Route } from 'react-router-dom';
import { Home } from './pages';
import NavigationBar from './layout/NavigationBar';
import './App.css';

function App() {
  return (
    <>
      {/* Header */}
      <header className='w-full h-20'>
        <NavigationBar />
      </header>

      {/* Main content */}
      <main className='w-full min-h-[100vh]'>
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </main>

      {/* Footer */}
      <footer>NUSComputing</footer>
    </>
  );
}

export default App;
