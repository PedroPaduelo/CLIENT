
export const isAuthenticated = () =>{
    return localStorage.getItem('esta_logado');
};

export const logar = () =>{
    localStorage.setItem("esta_logado","true");
    return localStorage.getItem('esta_logado');
};

export const deslogar = () =>{
    localStorage.removeItem('esta_logado');
    isAuthenticated();
    window.location.reload(false);
    return "";
};