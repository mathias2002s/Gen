import { connect } from "mongoose";



(async ()=> {
    try{
        const db =  await connect("mongodb://127.0.0.1/CRUM")
        console.log('conect'+db.connection.name)

    }catch(error){
        console.error(error);
    }
})(); 

