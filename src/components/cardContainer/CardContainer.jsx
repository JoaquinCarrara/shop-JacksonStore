import {useEffect, useState} from 'react'
import axios from "axios"
import { message, Row, Col, Skeleton, Spin } from 'antd';
import Item from "../card/Item"
import Error404 from '../../pages/Error404';


const CardContainer = () => {

    const [producto, setProducto] = useState([])
    const [isLoading, setIsLoading] = useState(false);

    useEffect(()=>{
        const handleProduct = async () =>{
            try{
                setIsLoading(true);
                const respuestaProductos = await axios.get("https://fakestoreapi.com/products")
                setProducto(respuestaProductos.data)
            }catch(error){
                message.error("No hay productos disponibles");
             
            
            }finally{
                setIsLoading(false);
            }
        }

        handleProduct();
    },[]) 

    if (isLoading)
    return (
      
      <Row justify="center" style={{height:"80%"}}>
        <Spin style={{marginTop: "200px", marginBottom:"200px"}}/>
        
        {/* <Col span={24}>
          <div style={{ height: "100", marginTop: 50 }}>
            <Skeleton avatar paragraph={{ rows: 15 }} />
          </div>
        </Col> */}
      </Row>
    );
    return (
      
        <Row gutter={[16, 16]} justify="center">
        {producto.map((product) => (
          <div key={product.id} style={{ marginTop: 20 }}>
            <Col>
              <Item product={product} isLoading={isLoading} />
            </Col>
          </div>
        ))}
      </Row>
    )
}

export default CardContainer
