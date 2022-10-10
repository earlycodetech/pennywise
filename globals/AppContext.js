import { createContext,useState } from "react";

const AppContext = createContext();

function AppProvider ({children}){
    const [userUID,setUserUID] = useState('uyuewuewrirrui');
    const [userEmail,setUserEmail] = useState('info@earlycode.net');
    const [userNames,setUserNames] = useState({fname:'Joseph',lname:'Ogbu'});

    return (
        <AppContext.Provider value={{userUID,userEmail,setUserEmail,userNames,setUserNames}}>
            {children}
        </AppContext.Provider>
    )
}

export {AppContext,AppProvider}