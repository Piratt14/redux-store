import React from 'react';
import BookList from "../book-list";

const HomePage = () => {
    const arr = [
        {
            id: 1,
            title: 'Production-Ready Microservices',
            author: 'Susan J. Fowler' },
        {
            id: 2,
            title: 'Release It!',
            author: 'Michael T. Nygard'
        },
    ];
    return (
        <BookList books={arr} />
    );
};

export default HomePage;
