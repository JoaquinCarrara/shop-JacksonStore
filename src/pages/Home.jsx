import { Carousel, Image } from "antd";
import React from "react";
import CardContainer from "../components/cardContainer/CardContainer";
import img4 from "../../src/components/navBar/imageTop4.jpg"
import { ArrowRepeat, CreditCard2Back, Truck } from "react-bootstrap-icons";
import { faLeaf } from "@fortawesome/free-solid-svg-icons";
import {Button} from "antd";


const Home = () => {
  const contentStyle = {
    height: "305px",
    color: "#fff",
    lineHeight: "200px",
    textAlign: "center",
    background: "#364d79",
    
  };
  return (
    <>

    
      <div style={{ marginTop: 1 }}>
      <img style={{height:"540px", width:"89%", }} src={img4}></img>
        
        {/* <Carousel autoplay>
          <div>
            <h3 style={contentStyle}>
              <Image preview={false} src="/assets/1.webp" alt="algo" />
            </h3>
          </div>
          <div>
            <h3 style={contentStyle}>
              <Image preview={false} src="/assets/2.webp" alt="algo" />
            </h3>
          </div>
          <div>
            <h3 style={contentStyle}>
              <Image preview={false} src="/assets/3.webp" alt="algo" />
            </h3>
          </div>
          <div>
            <h3 style={contentStyle}>
              <Image preview={false} src="/assets/4.webp" alt="algo" />
            </h3>
          </div>
        </Carousel> */}
        <CardContainer />

        <div style={{display:"flex", justifyContent:"space-between", marginTop:"100px"}}>
        <div>
          <Truck style={{fontSize:"90px", opacity:"0.9"}}/>
          <h3 style={{fontWeight:"300"}}>ENVIOS A TODO EL PAÍS</h3>
        </div>
        <div>
          <CreditCard2Back style={{fontSize:"90px", opacity:"0.9"}}/>
          <h3 style={{ fontWeight:"300", marginBottom:"0"}}>HASTA 6 CUOTAS SIN INTERÉS</h3>
          <p style={{fontSize:"18px", fontWeight:"300"}}>Con todas las tarjetas</p>
        </div>
        <div>
        <ArrowRepeat style={{fontSize:"90px", opacity:"0.9"}}/>
        <h3 style={{ fontWeight:"300"}}>SE REALIZAN CAMBIOS GRATIS</h3>
        </div>
        </div>

        <div style={{width:"40%", display:"inline-block", marginTop:"50px"}}>
          <h2>Recibí todas las ofertas</h2>
          <div style={{display:"flex"}}>
          <input type="" style={{borderRadius:"50px"}} id="email" class="form-control  " autocorrect="off" autocapitalize="off" name="email" placeholder="Email" ></input>
          <Button  style={{borderRadius:"50px", marginLeft:"5px", backgroundColor:"#758E4D", color:"white"}}>Enviar</Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;