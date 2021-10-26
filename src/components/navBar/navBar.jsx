import React from "react";
import { Layout, Menu, Badge, Image } from "antd";
import { ShoppingCartOutlined, } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { UseCart } from "../provider/CardProvider";
import RoutesNavBar from "./Routes";
import img3 from "../navBar/imageTop3.jpg"
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/free-solid-svg-icons"
import "react-bootstrap-icons"
import { Cart, Instagram, Whatsapp, Facebook } from "react-bootstrap-icons";


const { Header, Content, Footer } = Layout;

const NavBar = () => {
  const { cart } = UseCart();
  return (
    <>

    {/* PRUEBA */}
    


    {/* FIN PRUEBA */}
      <img style={{height:"200px", width:"100%", }} src={img3} />
      <Layout  className="layout">
        <Header style={{backgroundColor:"black"}}>
          <div className="logo" style={{backgroundColor:"black"}} />
          <Menu style={{backgroundColor:"black",  width:"100%", justifyContent:"center"}} mode="horizontal">
            <Menu.Item  key="home">
              <Link to="/" style={{color:"#758E4D", fontSize:"20px"}}>Home</Link>
            </Menu.Item>
            <Menu.Item key="productos">
              <Link to="/productos" style={{color:"#758E4D", fontSize:"20px"}}>Productos</Link>
            </Menu.Item>
            <Menu.Item key="contacto">
              <Link to="/contacto" style={{color:"#758E4D", fontSize:"20px"}}>Contacto</Link>
            </Menu.Item>
            <Menu.Item key="shop" style={{}} >     
              <Link to="/carrito" >
                <Badge count={cart ? cart.length : null}>
                <Cart style={{color:"white", fontSize:"30px"}} ></Cart>
                </Badge>
              </Link>
            </Menu.Item> 
            </Menu>
        </Header>

        <Content style={{ padding: "0 50px" }}>
          <div className="site-layout-content">
            <RoutesNavBar />
          </div>
        </Content>


        <Footer style={{ textAlign: "center", background:"#758E4D", position:"static", marginTop:"20px", marginBottom:"0"}}>
        <div style={{marginLeft:"40px"}}>
          <Link to="/contacto">
            <Facebook  style={{marginRight:"40px",marginBottom:"10px", fontSize:"45px", color:"black" }}/>
            <Instagram style={{marginRight:"40px",marginBottom:"10px", fontSize:"45px", color:"black"}}/>
            <Whatsapp style={{marginRight:"40px",marginBottom:"10px", fontSize:"45px", color:"black"}}/>
          </Link>
        </div>
          <span style={{color: "black", opacity:"0.8", fontSize:"16px"}}>Design ©2021 Created by</span> <span style={{fontWeight:"bold", opacity:"0.9", fontSize:"16px"}} onMouseOver="this.style.color='#0F0'">Joaquin Carrara</span>
        </Footer>
      </Layout>
    </>
  );
};

export default NavBar;