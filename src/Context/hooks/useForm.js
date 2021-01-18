import { useState } from "react";


import api from '../../services/api';

const useForm = () => {
  const [credenciaisPaciente, scredenciaisPaciente] = useState();
  const [validado, svalidado] = useState(false);


  async function validarCredenciais(id ,cod) {
    const {data} = await api.get(`/ValidarPaciente/${id}/${cod}`)
        scredenciaisPaciente(data);
        svalidado(true)
  }

  return {credenciaisPaciente, validado, validarCredenciais};


};

export default useForm;