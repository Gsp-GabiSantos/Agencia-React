import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import pagamento from "../img1/img/cards.png";
import tdestino from "../img1/img/DESTINOSLOGO.png";
import nacional1 from "../img1/img/nacional (1).jpg";
import nacional2 from "../img1/img/nacional (2).jpg";
import nacional3 from "../img1/img/nacional (3).jpg";
import nacional4 from "../img1/img/nacional (4).jpg";
import destinointer from "../img1/img/DESTINOSINTER LOGO.png";
import inter1 from "../img1/img/internacional (1).jpg";
import inter2 from "../img1/img/internacional (2).jpg";
import inter3 from "../img1/img/internacional (3).jpg";
import inter4 from "../img1/img/internacional 4.jpg";







const Destino= () =>{
return(
    <div>
    <hr/>

    <section class="container-destino">
        <div class="titulos">
            <img src={tdestino} width={"550px"} alt="" class="img-fluid"/>  
        </div>
        <div>
            <button type="button" class="btn btn-lg">Pão de Açucar - RJ</button>
            <button type="button" class="btn btn-lg">Chapada dos Veadeiros - GO</button>
            <button type="button" class="btn btn-lg">Gramado - RS</button>
            <button type="button" class="btn btn-lg">Maragogi - AL</button>
        </div>
    </section>  

    <section class="destinos">
        
        <div class="card" style={{width: "20rem"}}>
            <img src={nacional1} class="card-img-top" alt="..."/>
            <div class="card-body">
              <p class="card-text"> <font size={"3"}>Pão de Açucar - RJ</font>
                <br/>
                <font size={"4"} color={"red"}>R$ 5.100,00</font></p>
            </div>
          </div>
          <div class="card" style={{width: "20rem"}}>
            <img src={nacional2} class="card-img-top" alt="..."/>
            <div class="card-body">
              <p class="card-text"> <font size={"3"}>Chapada dos Veadeiros - GO</font>
                <br/>
                <font size={"4"} color={"red"}>R$ 5.100,00</font></p>
            </div>
          </div>
          <div class="card" style={{width: "20rem"}}>
            <img src={nacional3}class="card-img-top" alt="..."/>
            <div class="card-body">
              <p class="card-text"> <font size={"3"}>Gramado - RS</font>
                <br/>
                <font size={"4"} color={"red"}>R$ 5.100,00</font></p>
            </div>
          </div>
          <div class="card" style={{width: "20rem"}}>
            <img src={nacional4} class="card-img-top" alt="..."/>
            <div class="card-body">
              <p class="card-text"> <font size={"3"}>Maragogi - AL</font>
                <br/>
                <font size={"4"} color={"red"}>R$ 5.100,00</font></p>
            </div>
          </div>
    </section>
    <hr/>

    <section class="container-destino">
        <div class="titulos">
            <img src={destinointer} width={"650px"} alt=""class="img-fluid"/>  
        </div>
        <div class="botao">
            <button type="button" class="btn btn-lg">Paris</button>
            <button type="button" class="btn btn-lg">Cancún</button>
            <button type="button" class="btn btn-lg">Egito</button>
            <button type="button" class="btn btn-lg">Chile</button>
        </div>
    </section>  

    <section class="destinos">
        <div class="card" style={{width: "20rem"}}>
            <img src={inter1} class="card-img-top" alt="..."class="img-fluid"/>
            <div class="card-body">
              <p class="card-text"> <font size={"3"}>Paris</font>
                <br/>
                <font size={"4"} color={"red"}>R$ 5.100,00</font></p>
            </div>
          </div>
          <div class="card" style={{width: "20rem"}}>
            <img src={inter2} class="card-img-top" alt="..."/>
            <div class="card-body">
              <p class="card-text"> <font size={"3"}>Cancún</font>
                <br/>
                <font size={"4"} color={"red"}>R$ 5.100,00</font></p>
            </div>
          </div>
          <div class="card" style={{width: "20rem"}}>
            <img src={inter3} class="card-img-top" alt="..."/>
            <div class="card-body">
              <p class="card-text"> <font size={"3"}>Egito</font>
                <br/>
                <font size={"4"} color={"red"}>R$ 5.100,00</font></p>
            </div>
          </div>
          <div class="card" style={{width: "20rem"}}>
            <img src={inter4} class="card-img-top" alt="..."/>
            <div class="card-body">
              <p class="card-text"> <font size={"3"}>Chile</font>
                <br/>
                <font size={"4"} color={"red"}>R$ 5.100,00</font></p>
            </div>
          </div>
    </section>
<hr/>
    <footer>
        <img src={pagamento} width={"550px"} alt=""class="img-fluid"/>
    </footer>
    </div>
)
}

export default Destino;