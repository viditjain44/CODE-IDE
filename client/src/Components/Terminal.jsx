import {Terminal as XTerminal} from '@xterm/xterm'
import { useEffect, useRef } from 'react'
import socket from '../socket'
import '@xterm/xterm/css/xterm.css'

 const Terminal =()=> {
    const TerminalRef = useRef()
    const flag=useRef(false);
   
    useEffect(() => {
        if(flag.current) return;
        flag.current=true;
    const Term = new XTerminal(
        {
            rows :20,
        });
     Term.open(TerminalRef.current)
     Term.onData((data) => {
        if (socket.connected) {
            socket.emit("terminal:write", data);
          } else {
            console.log("Socket is not connected.");
          }
        
     });

     socket.on("terminal:data",(data)=>
    {
        Term.write(data);
    });

},[])
    return (
        <div  ref ={TerminalRef}  id="Terminal"/>
    )
 }
 export default Terminal;