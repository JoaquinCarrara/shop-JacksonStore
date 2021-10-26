import "../card/Item.css"
import { Card, Image, Rate, Button } from "antd";
import { SearchOutlined,  } from "@ant-design/icons";
import { useHistory } from "react-router";
import React from "react";


const { Meta } = Card;

const Item = ({ product, isLoading }) => {
  let history = useHistory();
  const handleDetail = (id) => {
    history.push(`/detalles/${id}`);
  };
  return (
  <div className="cajaItems">
    <Card
      loading={isLoading}
      style={{ width: 300}}
      className="card"
      cover={
        <Image
          style={{ objectFit: "cover", alignItems: "center" }}
          width={300}
          height={300}
          preview={ false }
          src={product.image}
          className="imagen"
          onClick={()=>handleDetail(product.id)}
        />
      }
      actions={[
        // <SearchOutlined className="buscador" style={{ fontSize: "26px" }} onClick={()=>handleDetail(product.id)} />,
        <Button style={{backgroundColor:"#758E4D", borderRadius:"50px", color:"white"}} onClick={()=>handleDetail(product.id)}>Comprar</Button>
      ]}>
      <Meta className="meta" title={product.title} description={`Precio: $${product.price}`} />
      {/* <Rate className="rate" allowHalf  disabled value={product.rating.rate} /> */}
    </Card>
    </div>
  );
};

export default Item;