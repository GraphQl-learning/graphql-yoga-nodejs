import { server } from './server';
import './databse';

server.start({port:5000},({port})=>{
    console.log(`server on port: ${port}`);
});

