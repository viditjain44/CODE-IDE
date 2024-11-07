import {Terminal as XTerminal} from '@xterm/xterm'
import { useEffect, useRef } from 'react'
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
     Term.onData(data => {
        console.log(data)
     });

},[])
    return (
        <div  ref ={TerminalRef}  id="Terminal"/>
    )
 }
 export default Terminal;