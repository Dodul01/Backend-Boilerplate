import { app } from "./app";
import config from "./config";
async function server(){
    try{
        app.listen(config.port, ()=>{
            console.log(`Server is running on port ${config.port}`);
        })
    }catch(err){
        console.log(err);
        
    }
}

server();