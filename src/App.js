import { BrowserRouter } from 'react-router-dom';
import './App.css';
import { AppNavigation } from './navigation/AppNavigation';

function App() {
  return (
    <BrowserRouter>
      <AppNavigation />
    </BrowserRouter>
  );
}

export default App;
