// use memo for avoiding rerender
import React from 'react';

function Header({title}){
    return <div>
        {title}
    </div>

}

export default React.memo(Header);