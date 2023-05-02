import React from 'react';

const Home = () => {
    const data = fetch("https://jsonplaceholder.typicode.com/users");
    
    return (
        <section>
            This is home
        </section>
    );
};


export default Home;