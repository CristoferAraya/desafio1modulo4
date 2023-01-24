import './App.css';

import Header from './Components/Header';
import Card from './Components/Card';
import Footer from './Components/Footer';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  const data = [
    {
      title: "Pubg Mobile",
      desc: "Juego shooter en 1ra y 3ra persona",
      photo: "https://tse3.mm.bing.net/th?id=OIP.lM7FFwUaeQY44Ze4EAjULwHaEK& pid=Api&P=0"
    },
    {
      title: "Pubg PC",
      desc: "Juego shooter en 1ra y 3ra persona",
      photo: "https://tse4.mm.bing.net/th?id=OIP.QiY9_ch3mhhluBEZvDlsFAHaEO&pid=Api&P=0"
    },
    {
      title: "Pubg Consolas",
      desc: "Juego shooter en 1ra y 3ra persona",
      photo: "https://tse2.mm.bing.net/th?id=OIP.DGBKhSKVGLus4ymW_haChgHaEK&pid=Api&P=0"
    }
  ]



  return (
    <>
      <div className="App container">
        <Header
          subtitle="soy un subtitulo"
          title="Galeria de imagenes con React"
        />
        <div className="row">
          {data.map((item) => (
            <Card
              key={item.title}
              title={item.title}
              desc={item.desc}
              photo={item.photo}
            />
          ))}


          
        </div>
      </div>
      <Footer desc="Pubg es un juego shooter que se puede jugar en 1ra o 3ra persona,puedes jugar individual o en equipo.Deberas luchar contra otros jugadores en Battle Royal,equipandote con armas para luchar contra otros jugadores,para obtener el 1er lugar."></Footer>
    </>
  );
}

export default App;


