import React, { useState, useEffect } from 'react';
import Tool from './Tool';

const Tools = () => {

    const [tools, setTools] = useState([]);

    useEffect(() => {
        fetch('tools.json')
            .then(res => res.json())
            .then(data => setTools(data))
    }, []);

    return (
        <div style={{ backgroundColor: '#FBFAF9 ' }} className='p-8'>
            <h2 style={{ fontFamily: 'Merienda' }} className='text-3xl text-center font-bold py-5 pb-16'>Trending Tools</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14'>
                {
                    tools.map(tool => <Tool
                        key={tool._id}
                        tool={tool}
                    ></Tool>)
                }
            </div>
        </div>
    );
};

export default Tools;