import React, { useState} from 'react';

function ThemeChange(){
    Const [Dark , setDark] = useState(false);

    const styles ={
        backgroundcolor : dark ? 'black' : 'white',
        color : dark ? 'white' : 'black',
        height : '100vh',
        width : '100vw'

    }
    
    return(
        <div style={styles}>
            <button onClick={()=>setDark(!Dark)}>
                change theme {Dark ? 'Light' : 'Dark'}
            </button>
        </div>
        
    )

}
export default  ThemeChange;