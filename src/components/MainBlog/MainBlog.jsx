import React from 'react';

const MainBlog = () => {
    return (
        <div className='container bg-purple-50 rounded-xl mt-8'>
            <div className='mx-8'>
                <h1 className="pt-6 pb-4 font-bold text-lg lg:text-xl text-purple-700 text-left">Q1. When should we use context API?</h1>
                <p className='text-left'>The Context API in React is a way to share data across a tree of components, without having to manually pass props down through every level of the tree. It is particularly useful when you have data that needs to be accessed by multiple components at different levels of the component tree.
                    <br className='text-left' />
                    Here are some situations where you might want to use the Context API:</p>
                <ul class="text-sm lg:text-base m-4 text-left">
                    <li className='my-2 '>
                        <span className='underline font-medium'>Needs to be shared across multiple components:</span>
                        If you have data that needs to be accessed by many components in your application, you can use the Context API to make that data available to all the components that need it.

                    </li>
                    <li className='my-2'>
                        <span className='underline font-medium'>Avoid "prop drilling":</span> Prop drilling is the process of passing down data through multiple levels of components, even when some of those components do not need the data. This can be a tedious and error-prone process, and the Context API can help you avoid it.

                    </li>
                    <li className='my-2'>
                        <span className='underline font-medium'>Avoid using global variables:</span> Using global variables to store data can lead to issues with maintainability and modularity. The Context API provides a way to share data between components without using global variables.
                    </li>
                    <li className='my-2'>
                        <span className='underline font-medium'>Make code more modular:</span> By using the Context API, you can create reusable components that can be used in different parts of your application, without having to worry about passing down props manually.
                    </li>
                </ul>
            </div>
            <div className='mx-8'>
                <h1 className="pt-6 pb-4 font-bold text-lg lg:text-xl text-purple-700 text-left">Q2. What is custom hook in react? </h1>
                <p className='text-left'>React custom hook is a JavaScript function that starts with the prefix <b>`use`</b> and allows to extract and reuse logic across components.Custom hooks can use the same hooks as regular components, such as useState and useEffect, but they are used outside of the context of a specific component. The <b>`useState`</b> hook is used to manage the state, and the <b>`useEffect`</b> hook is used to add an event listener for the resize event, which updates the state with the new window dimensions. They help to make your code more modular and maintainable by allowing you to reuse stateful logic across multiple components, without having to repeat the same code.</p>
            </div>
            <div className='mx-8'>
                <h1 className="pt-6 pb-4 font-bold text-lg lg:text-xl text-purple-700 text-left">Q3. What is useRef?</h1>
                <p className='text-left'>The <b>useRef</b> Hook allows you to persist values between renders. It can be used to access a DOM element directly.It can be used to store any mutable value that needs to persist across re-renders, such as a reference to an instance of a class, or a value that needs to be shared between multiple hooks.</p>
            </div>
            <div className='mx-8'>
            <h1 className="pt-6 pb-4 font-bold text-lg lg:text-xl text-purple-700 text-left">Q4. What is useMemo?</h1>
                <p className='text-left pb-8'>The <b>useMemo</b> is a React hook that allows to memorize the result of a function call and cache it, so that it can be reused later if the input parameters are the same. It is often used to optimize the performance of a component by preventing unnecessary re-renders.</p>
            </div>
        </div>
    );
};

export default MainBlog; <h2>blog is here</h2>