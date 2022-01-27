import logo from './logo.svg';
import './App.css';
import NavbarSitio from './components/NavbarSitio';
import Inicio from './components/Inicio';
import Quienes from './components/Quienes';
import Somos from './components/Somos';
import Think from './components/Think';
import Work from './components/Work';
import Steps from './components/Steps';
import Services from './components/Services';
import Exito from './components/Exito';
import Fin from './components/Fin';









function App() {
  return (
    <div className="App">
      <NavbarSitio></NavbarSitio>
      <Inicio></Inicio>
      <Quienes></Quienes>
      <Somos></Somos>
      <Think></Think>
      <Work></Work>
      <Steps></Steps>
      <Services></Services>
      <Exito></Exito>
      <Fin></Fin>
    </div>
  );
}

export default App;
