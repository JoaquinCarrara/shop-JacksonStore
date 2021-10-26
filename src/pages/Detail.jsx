import { ShoppingOutlined, MinusCircleOutlined, PlusCircleOutlined  } from "@ant-design/icons";
import {
  Col,
  Row,
  Image,
  message,
  Skeleton,
  Divider,
  Button,
  Rate,
} from "antd";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";
import Contador from "../components/contador/Contador";
import { UseCart } from "../components/provider/CardProvider";



const Detail = () => {
  const [dataProducto, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [counter, setCounter] = useState(0);

  const { AddToCart } = UseCart();

  const { id } = useParams();
  let history = useHistory();

  const handleAgregar = () => {
    if (counter < dataProducto[0]?.rating.count) {
      const value = counter + 1;
      setCounter(value);
    } else {
      message.warning("ha llegado al maximo stock");
    }
  };
  const handleQuitar = () => {
    if (counter > 0) {
      const value = counter - 1;
      setCounter(value);
    }
  };

  const handleAdd = () => {
    const dataToSend = { ...dataProducto[0], amount: counter };
    AddToCart(dataToSend);
    history.push("/carrito");
  };

  useEffect(() => {
    const handleGetProducts = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get("https://fakestoreapi.com/products");
        const takeResponse = response.data;
        const filterProduct = takeResponse.filter(
          (product) => product.id === parseInt(id)
        );
        setData(filterProduct);
      } catch (error) {
        message.error("Error al consultar productos");
      } finally {
        setIsLoading(false);
      }
    };
    handleGetProducts();
  }, [id]);

  if (isLoading)
    return (
      <Row justify="center">
        <Col span={24}>
          <div style={{ height: "100", marginTop: 50 }}>
            <Skeleton avatar paragraph={{ rows: 15 }} />
          </div>
        </Col>
      </Row>
    );

  return (
    <div style={{width:"100%", height:"678px", display:"flex", justifyContent:"center"}}>
    <Row justify="center" style={{width:"1000px", marginTop:"85px"}}>
      <Col span={24} lg={{ span: 12 }}>
        <div style={{ marginTop: 20}}>
          <Image
            style={{ objectFit: "scale-down", alignItems: "center" }}
            width={400}
            height={400}
            src={dataProducto[0]?.image}
          />
        </div>
        <h3 style={{fontSize:"15px"}}>{`Unidades disponibles: ${dataProducto[0]?.rating.count}`}</h3>
      </Col>
      <Col span={24} lg={{ span: 12 }}>
        <div style={{ marginTop: 20}}>
          <h2 style={{fontSize:"25px"}}>{dataProducto[0]?.title}</h2>
          <Divider />
          <h4 style={{color:"#A1A1A1", fontSize:"20px"}}>{dataProducto[0]?.description}</h4>
          <Divider />
          <h3>{`Precio: $${dataProducto[0]?.price}`}</h3>
          
          <div style={{ display:"flex", justifyContent:"center"}}>
          
            <Row>
              <Col>
              <Button variant="primary" style={{backgroundColor:"#758E4D", color:"white"}} onClick={handleQuitar}>-</Button>{' '}
          </Col>
          <Col>
          <h3 style={{marginLeft:"4px", marginRight:"4px", fontSize:"25px"}}>{` ${counter}`}</h3>
          </Col>
          <Col>
          <Button variant="primary" style={{backgroundColor:"#758E4D", color:"white"}} onClick={handleAgregar}>+</Button>{' '}
          </Col>
          </Row>
          </div>

          <Rate allowHalf defaultValue={dataProducto[0]?.rating.rate} />
          <Divider />

          <div style={{ marginTop: 20, alignItems: "center", marginBottom: 20 }}>
          {counter !== 0 && (
              <Button
                icon={<ShoppingOutlined style={{fontSize: "20px"}} />}
                style={{borderRadius:"50px", backgroundColor:"#758E4D", color:"white", width:"250px", height:"60px"}}
                size="large"
                onClick={handleAdd}>
                Agregar al carrito
              </Button>
          )}
          </div>
        </div>
      </Col>
    </Row>
    </div>
  );
};

export default Detail;
