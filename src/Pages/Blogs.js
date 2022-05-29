import React from 'react';

const Blogs = () => {
    return (
        <section className='px-6 sm:px-16 py-10'>
            <h2 style={{ fontFamily: 'Merienda' }} className='text-3xl text-center font-bold py-6'>My Blogs</h2>
            <div className='p-4 border mb-5'>
                <h2 style={{ fontFamily: 'Merienda' }} className='text-2xl py-2'>How will you improve the performance of a React Application?</h2>
                <p className='text-[18px]'>Optimizing application performance is key for developers who are mindful of keeping a user's experience positive to keep them on an app and engaged. In React applications, we are guaranteed a very fast UI by default. However, as an application grows, developers may encounter some performance issues.
                </p>
                <p className='pl-2 sm:pl-6 text-[18px] pt-4'> * Keeping component state local where necessary.</p>
                <p className='pl-2 sm:pl-6 text-[18px]'> * Memoizing React components to prevent unnecessary re-renders.</p>
                <p className='pl-2 sm:pl-6 text-[18px]'> * Code-splitting in React using dynamic import</p>
                <p className='pl-2 sm:pl-6 text-[18px]'> * Windowing or list virtualization in React.</p>
                <p className='pl-2 sm:pl-6 text-[18px]'> * Lazy loading images in React.</p>
            </div>
            <div className='p-4 border mb-5'>
                <h2 style={{ fontFamily: 'Merienda' }} className='text-2xl py-2'>What are the different ways to manage a state in a React application?</h2>
                <p className='text-[18px]'>When we talk about state in our applications, it's important to be clear about what types of state actually matter. There are four main types of state you need to properly manage in your React apps:</p>
                <p className='pl-4 sm:pl-6 pt-4 text-[18px]'> * Local state.</p>
                <p className='pl-4 sm:pl-6 text-[18px]'> * Global State</p>
                <p className='pl-4 sm:pl-6 text-[18px]'> * Server State</p>
                <p className='pl-4 sm:pl-6 text-[18px]'> * URL State</p>
            </div>
            <div className='p-4 border mb-5'>
                <h2 style={{ fontFamily: 'Merienda' }} className='text-2xl py-2'>How does prototypical inheritance work?</h2>
                <p className='text-[18px]'>Every object with its methods and properties contains an internal and hidden property known as <strong>Prototype</strong>. The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the <strong>Prototype</strong> of an object, we use Object.getPrototypeOf and Object.setPrototypeOf. Nowadays, in modern language, it is being set using <strong> __proto__</strong>.</p>
            </div>
            <div className='p-4 border mb-5'>
                <h2 style={{ fontFamily: 'Merienda' }} className='text-2xl py-2'>Why you do not set the state directly in React?</h2>
                <p className='text-[18px] pb-4'>One should never update the state directly because of the following reasons:</p>
                <p className='text-[18px] pb-2 pl-4 sm:pl-6'> * If you update it directly, calling the setState() afterward may just replace the update you made.</p>
                <p className='text-[18px] pb-2 pl-4 sm:pl-6'> * When you directly update the state, it does not change this.state immediately. Instead, it creates a pending state transition, and accessing it after calling this method will only return the present value.</p>
                <p className='text-[18px] pb-2 pl-4 sm:pl-6'> * You will lose control of the state across all components.</p>
            </div>
            {/* <div className='p-4 border mb-5'>
                <h2 style={{ fontFamily: 'Merienda' }} className='text-2xl py-2'>You have an array of products. Each product has a name, price, description, etc. How will you implement a search to find products by name?</h2>
            </div> */}
            <div className='p-4 border mb-5'>
                <h2 style={{ fontFamily: 'Merienda' }} className='text-2xl py-2'>What is a unit test? Why should write unit tests?</h2>
                <p className='text-[18px]'> A unit test is a way of testing a unit - the smallest piece of code that can be logically isolated in a system. In most programming languages, that is a function, a subroutine, a method or property. The isolated part of the definition is important. In his book "Working Effectively with Legacy Code", author Michael Feathers states that such tests are not unit tests when they rely on external systems: “If it talks to the database, it talks across the network, it touches the file system, it requires system configuration, or it can't be run at the same time as any other test."</p>
            </div>
        </section>
    );
};

export default Blogs;