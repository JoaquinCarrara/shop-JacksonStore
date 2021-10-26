
import React, { useEffect } from "react";
import {
  Card,
  Col,
  Row,
  Image,
  Button,
  notification,
  Popconfirm,
  message,
} from "antd";
import { UseCart } from "../components/provider/CardProvider";
import { DeleteOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import { useHistory } from "react-router";
import imageShop from "../components/image/imageShop.jpg"
import {Link} from "react-router-dom"


const { Meta } = Card;

const Shop = () => {
  const { cart, CalculatePrice, removeItemFromArr, deleteAllCart } = UseCart();

  let history = useHistory();

  const handleDelete = (id) => {
    removeItemFromArr(id);
  };

  useEffect(() => {
    if (cart.length === 0) {
      history.push("/");
    }
  }, [cart, history]);

  const handleDeleteAll = (key) => {
    deleteAllCart();
    notification.close(key);
  };



  const openNotification = () => {
    const key = "open";
    const btn = (
      <Button
        danger
        type="primary"
        size="small"
        onClick={() => handleDeleteAll(key)}>
        Confirmar
      </Button>
    );
    notification.open({
      message: "Desea borrar todos los productos?",
      description:
        "Si confirma, se eliminarán todos los productos del carro",
      btn,
      key,
    });
  };
  return (
    <Row gutter={[16, 16]}>
      <Col span={24} lg={{ span: 24 }}>
        <Row justify="end">
          <Button
            icon={<ShoppingCartOutlined />}
            onClick={openNotification}
            danger
            type="primary"
            style={{marginTop:"20px", borderRadius:"20px"}}>
            Borrar todo el carrito
          </Button>
        </Row>
        <div style={{ marginTop: 20}}>
          <h1>{`Total del carrito: $${CalculatePrice().toFixed(2)} `}</h1>
        </div>
      </Col>
      
      {cart.map((product) => (
        <div key={product.id} style={{ marginTop: 20 }}>
          <Col>
            <Card
              style={{ width: 400, height:600 }}
              cover={
                <Image
                  style={{ objectFit: "cover", alignItems: "center" }}
                  width={300}
                  height={300}
                  preview={{ mask: "Agrandar imagen" }}
                  src={product.image}
                />
              }
              actions={[
                <>
                  <Popconfirm
                    title="Esta seguro que desea borrar este producto?"
                    onConfirm={() => handleDelete(product.id)}
                    okText="Si"
                    cancelText="No"
                    type="primary"
                  >
                      
                    <DeleteOutlined
                      style={{ fontSize: "26px", color: "red" }}
                    />
                  </Popconfirm>
                </>,
              ]}>
              <Meta title={product.title}/>
              <p style={{fontSize:"25px"}}>{`Precio: $${product.price}`}</p>
              <p style={{fontSize:"22px"}}>{`Cantidad: ${product.amount}`}</p>
              <p style={{fontSize:"25px"}}>{`Total: $${(product.amount * product.price).toFixed(2)}`}</p>
            </Card>
          </Col>
          </div>
      ))}

      <div style={{display:"flex", justifyContent:"center", width:"100%", alignItems:"end" }}>
      <Link to="/products">
      <Button  style={{borderRadius:"50px", width:"230px", height:"60px", fontSize:"22px", margin:"10px", backgroundColor:"#758E4D", color:"white"}}>Seguir comprando</Button>
      </Link>
      <Button style={{borderRadius:"50px", width:"230px", height:"60px", fontSize:"22px",  margin:"10px", backgroundColor:"#758E4D", color:"white"}}>Finalizar compra</Button>
      </div>
      <div style={{height:"230px", width:"100%"}}>
        <img src={imageShop} alt="tarjetas"  style={{width:"1100px", height:"180px"}} />
      </div>
    </Row>
  );
};

export default Shop;
