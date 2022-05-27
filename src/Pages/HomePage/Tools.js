import React from 'react';
import useHooks from '../../hooks/useHooks';
import Tool from './Tool';

const Tools = () => {

    const [tools, setTools] = useHooks();

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