import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5288/api',
  });

api.interceptors.request.use((config) => {

    const token = localStorage.getItem("token");
    if(token)
    {
        config.headers!.Authorization = `Bearer ${token}`;
    }
    return config;
});

api.interceptors.response.use(
    (resposta) => resposta,
    (erro) => {
        if(erro.response.status === 401){
            localStorage.removeItem("token");
            window.location.href = "/usuario/login";
        }
        return Promise.reject(erro);
    }
);


export default api;