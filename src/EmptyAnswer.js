import React from 'react';
import './recipe.module.css'


const EmptyAnswer = () => {
return(
    <div className='emptyAnswerWrapper'>
    <div className='emptyAnswer'>
        <h1>No recipes for your search</h1>
    </div>
    </div>
);
};

export default EmptyAnswer;