import React from 'react';
import App from '../App';

function Desc(movie) {
    return (
  
        {movie.map((el,key)=>{return (
            <><h1>{el.description}</h1></>
               );})}
    

        <BrowserRouter>
    <div>
     <Header></Header>
      
<Route  exact path='/'>
<App/>
</Route>
     
    </div>
    </BrowserRouter> 
   


    );
}

export default Desc;