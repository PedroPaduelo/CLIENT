import React, {useState, useEffect} from 'react';
import { useParams } from "react-router-dom";
import CardProd from './CardProdML';
import api from '../../services/api'

import publicIp from 'react-public-ip'  
 


  function detectar_mobile() { 
    if( navigator.userAgent.match(/Android/i)
      || navigator.userAgent.match(/webOS/i)
      || navigator.userAgent.match(/iPhone/i)
      || navigator.userAgent.match(/iPad/i)
      || navigator.userAgent.match(/iPod/i)
      || navigator.userAgent.match(/BlackBerry/i)
      || navigator.userAgent.match(/Windows Phone/i)
    ){
      return "Mobile";
    }
    else {
      return "Desktop";
   }
  }


  function get_data() { 
    // Obtém a data/hora atual
    var datas = new Date();
    var dia     = datas.getDate();           // 1-31
    var mes     = datas.getMonth();          // 0-11 (zero=janeiro)
    var ano4    = datas.getFullYear();       // 4 dígitos
    // Formata a data e a hora (note o mês + 1)
    var str_data = dia + '/' + (mes+1) + '/' + ano4;
    return str_data;
  }


  function get_horas() { 
    // Obtém a data/hora atual
    var datas = new Date();
    var hora    = datas.getHours();          // 0-23
    var min     = datas.getMinutes();        // 0-59
    var seg     = datas.getSeconds();        // 0-59
    var str_hora = hora + ':' + min + ':' + seg;

    return str_hora;
  }



function PageProduto() {
  let { id } = useParams();

  let { prodname } = useParams();

  const [ prod, sprod ] = useState("");

  useEffect(() => {
    async function getItems() {
      try {
        const { data } = await api.get(`/ListProdutosById/${id}`);
        sprod(data)

        const ip = await publicIp.v4() || "";

        let acesso = {
          devicer: detectar_mobile(),
          ip,
          data_acesso: get_data(),
          hora_acesso: get_horas(),
          id_prod: id
        }
        await api.post(`/CreatAcessos`, acesso)
      } catch (error) {
          console.log(error)
      }
    }
    getItems();
  },[id]);


  return (
    <CardProd prod={prod} title={prodname}/>
  );
}

export default PageProduto;