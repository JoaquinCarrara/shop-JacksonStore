import React from 'react'
import { Divider, Button } from 'antd'
import {Facebook, Instagram, Whatsapp, GeoAltFill} from "react-bootstrap-icons"
import {Link} from "react-router-dom"

const Contacto = () => {
  return (
    <>
     <h2 style={{fontWeight:"bold", marginTop:"20px"}}>Contacto</h2>
     <div style={{display:"flex", width:"100%", justifyContent:"center"}}>
     <form style={{width:"700px", display: "flex", flexDirection:"column", justifyContent:"center", alignItems:"center"}}>
                    <input type="text" id="name" className="form-control" name="name" placeholder="Nombre" style={{borderRadius:"50px", margin:"8px"}}></input>
                    <input type="" id="email" className="form-control  " autocorrect="off" autocapitalize="off" name="email" placeholder="Email" style={{borderRadius:"50px", margin:"8px"}}></input>
                    <input type="tel" id="phone" className="form-control  " autocorrect="off" autocapitalize="off" name="phone" placeholder="Teléfono" style={{borderRadius:"50px", margin:"8px"}}></input>
                    <textarea id="message" className="form-control form-control-area  " autocorrect="off" autocapitalize="off" name="message" rows="7" placeholder="Mensaje" style={{borderRadius:"25px", margin:"8px"}}></textarea>
                    <Button  style={{borderRadius:"50px", backgroundColor:"#758E4D", color:"white", marginTop:"12px"}} size="large" className="btn-lg">Enviar</Button>
                    </form>
                    </div>
                    <Divider style={{backgroundColor:"#ACABAB", opacity:"0.5"}} />
     <h2 style={{fontWeight:"bold", marginTop:"20px"}}>Redes</h2>

    <div style={{display:"flex", alignItems:"center", justifyContent:"center", height:"170px"}}>
        <div style={{display:"flex", justifyContent:"space-between", width:"60%"}}>
            <div>
              <Facebook  style={{fontSize:"40px"}} />
              <p>/jacksonStore</p>
            </div>
            <div>
              <Instagram style={{fontSize:"40px"}} />
              <p>/jacksonStore</p>
            </div>
            <div>
              <Whatsapp style={{fontSize:"40px"}}/>
              <p>+541152698563</p>
           </div>    
        </div>
        </div>
                <Divider style={{backgroundColor:"#ACABAB", opacity:"0.5"}}/>
                <h2 style={{fontWeight:"bold"}}>Locales</h2>
                <div style={{display:"flex", flexDirection:"row",justifyContent:"space-between", marginTop:"70px"}}>
                  <div style={{}}>
                    <h3 style={{margin:"0"}}>Belgrano</h3>
                    <p>Olazabal 2704</p>
                    <p><Whatsapp style={{fontSize:"20px"}}/> +54115263563</p>
                    <p><GeoAltFill style={{fontSize:"22px"}}/><Link to=""> -34.561890462397706, -58.4611800305382</Link></p>
                    
                  </div>
                  <div>
                    <h3 style={{margin:"0"}}>Cañitas</h3>
                    <p>Jorge Newbery 1967</p>
                    <p><Whatsapp style={{fontSize:"20px"}}/> +54115263564</p>
                    <p><GeoAltFill style={{fontSize:"22px"}}/><Link to=""> -34.561890462397706, -58.4611800305382</Link></p>
     
                  </div>
                  <div>
                    <h3 style={{margin:"0"}}>Almagro</h3>
                    <p>Av. Corrientes 3751</p>
                    <p><Whatsapp style={{fontSize:"20px"}}/> +54115263565</p>
                    <p><GeoAltFill style={{fontSize:"22px"}}/><Link to=""> -34.561890462397706, -58.4611800305382</Link></p>
     
                  </div>
                  <div>
                    <h3 style={{margin:"0"}}>Villa Crespo</h3>
                    <p>Loyola 851</p>
                    <p><Whatsapp style={{fontSize:"20px"}}/> +54115263566</p>
                    <p><GeoAltFill style={{fontSize:"22px"}}/><Link to=""> -34.561890462397706, -58.4611800305382</Link></p>
     
                  </div>
                </div>
                <Divider style={{backgroundColor:"#ACABAB", opacity:"0.5"}}/>
                

    </>
  )
}

export default Contacto
