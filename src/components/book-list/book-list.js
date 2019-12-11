import React, { Component } from "react";
import BookListItem from "../book-list-item";
import { connect } from 'react-redux';

import { withBookstoreService } from '../hoc';
import { booksLoaded } from "../../actions";
import { compose } from "../../utils";
import './book-list.css';

class BookList extends Component {

    componentDidMount() {
        // получаем сервис из контекста
        // при помощи компонента высшего порядка withBookstoreService
        const { bookstoreService } = this.props;
        // из сервиса получаем данные
        const data = bookstoreService.getBooks();

        // передаем данные в REDUX STORE с помощью этого экшена
        this.props.booksLoaded(data);
    }

    render() {
        const { books } = this.props;

        return (
            <ul className="book-list">
                {
                    books.map((book) => {
                        return (
                            <li key={book.id}><BookListItem book={book}/></li>
                        );
                    })
                }
            </ul>
        );
    }
}

//  эта функция описывает какие данных компонент хочет получить из REDUX STORE
const mapStateToProps = ({ books }) => {
    return {
        books,
    };
};

//  описывает то какие действия захочет выполнить компонент, какие действия будет передавать в STORE
const mapDispatchToProps = ({booksLoaded});

export default compose(
    withBookstoreService(),
    connect(mapStateToProps, mapDispatchToProps)
)(BookList);
