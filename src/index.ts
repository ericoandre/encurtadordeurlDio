import api from "./app";

const PORT = Number(process.env.PORT) || 5000

api.listen(PORT, ()=>{
    console.log(`🚀 Servidor On porta http://localhost:${PORT}`);
});