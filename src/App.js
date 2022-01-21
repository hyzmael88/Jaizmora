import logo from './logo.svg';
import './App.css';
import NavbarSitio from './components/NavbarSitio';
import Inicio from './components/Inicio';
import Quienes from './components/Quienes';
import Somos from './components/Somos';
import Think from './components/Think';
;





function App() {
  return (
    <div className="App">
      <NavbarSitio></NavbarSitio>
      <Inicio></Inicio>
      <Quienes></Quienes>
      <Somos></Somos>
      <Think></Think>
      <p>How we work</p>
      <p>Steps for Success</p>
      <p>Our services</p>
      <p>Casos de Exito</p>
      <p>Fin</p>
    </div>
  );
}

export default App;
