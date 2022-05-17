import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import html2canvas from 'html2canvas';

function App() {

  //debugger;

  const[linea1,setLinea1] = useState();
  const[linea2,setLinea2] = useState();
  const[imagen,setImagen] = useState();

  const onChangeLinea1 = function(evento){

    setLinea1(evento.target.value)

  }

  const onChangeLinea2 = function(evento){

    setLinea2(evento.target.value)

  }

  const onChangeImagen = function(evento){

    setImagen(evento.target.value)

  }

  //USAREMOS LA LIBRERIA QUE SE LLAMA HTML2CANVAS {https://html2canvas.hertzen.com/} npm install --save html2canvas
  const onClickBotonExportar = function(evento){

    html2canvas(document.querySelector("#meme")).then(canvas => {
     // document.body.appendChild(canvas) {le argrego un hijo al body donde se repite la imagen}

      var img = canvas.toDataURL("image/png");
      var link = document.createElement('a');
      link.download = "meme.png"
      link.href=img;
      link.click();

  });

  }

  const onChangeTañoFuente = function(eventoTamañoLetra){

    //alert(eventoTamañoLetra.target.value)

    var tamaño = eventoTamañoLetra.target.value.concat("px");
    document.getElementById("l1").style.fontSize = tamaño;
    document.getElementById("l2").style.fontSize = tamaño;

  }

  const onChangeColores = function(eventoColoresLetras){

    document.getElementById("l1").style.color = eventoColoresLetras.target.value;
    document.getElementById("l2").style.color = eventoColoresLetras.target.value;

  }


  

  return (

    <div className="App">

      <h1 className='text-white mt-5 mb-5'>Generador de memes</h1>

      <label className=' ms-3 me-3 text-white'>Meme</label>
      <select className="btn btn-primary border my-3" onChange={onChangeImagen} >

        <option value="niña">Casa en llamas</option>
        <option value="futurama">Futurama</option>
        <option value="dinosaurio">Dinosaurio</option>
        <option value="pensando">Pensando</option>

      </select>

      <label className=' ms-3 text-white'>Tamaño de Fuente</label>
      <select className="ms-3 btn btn-primary border my-3" onChange={onChangeTañoFuente} >

        <option value="16">16</option>
        <option value="20">20</option>
        <option value="24">24</option>
        <option value="30">30</option>
        <option value="34">34</option>
        <option value="38">38</option>
        <option value="42">42</option>
        <option value="46">46</option>

      </select>

      <label className=' ms-3 me-2 text-white'>Color Letra</label>
      <input className='btn btn-primary' type="color" onChange={onChangeColores}></input>

      <br/>
      
      <div className="d-flex justify-content-center w-100 conjuntoLineas">

        <input onChange={onChangeLinea1} type="text" placeholder='Linea 1'></input>

        <input className='ms-5' onChange={onChangeLinea2} type="text" placeholder='Linea 2'></input>

        <button onClick={onClickBotonExportar} className="btn btn-primary border ms-5">Exportar</button>


      </div>

      <div className="d-flex justify-content-center mt-3 w-100">

      <div className='d-flex justify-content-center mt-3' id='meme'>

        <span className="linea1 text-center" id='l1'>{linea1}</span>
        <br/>
        <span className="linea2 text-center" id='l2'>{linea2}</span>
        <img src={"/img/"+imagen+".jpg"} width="600px" height="500px"/>

      </div>

      </div>

    </div>

  );
}

export default App;
