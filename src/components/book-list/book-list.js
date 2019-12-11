import React, { Component } from "react";
import BookListItem from "../book-list-item";
import { connect } from 'react-redux';

import { withBookstoreService } from '../hoc';
import { booksLoaded, booksRequested, booksError } from "../../actions";
import { compose } from "../../utils";
import './book-list.css';
import Spinner from "../spinner";
import ErrorIndicator from "../error-indicator";

class BookList extends Component {

    componentDidMount() {
        // получаем сервис из контекста
        // при помощи компонента высшего порядка withBookstoreService
        const {
            bookstoreService,
            booksLoaded,
            booksRequested,
            booksError,
        } = this.props;
        // из сервиса получаем данные
        // передаем данные в REDUX STORE с помощью этого экшена
        booksRequested();
        bookstoreService.getBooks()
            .then((data) => booksLoaded(data))
            .catch((err) => booksError(err));
    }

    render() {
        const { books, loading, error } = this.props;
        if (loading) {
            return <Spinner/>;
        }

        if (error) {
            return <ErrorIndicator/>;
        }

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
const mapStateToProps = ({ books, loading, error }) => {
    return {
        books,
        loading,
        error,
    };
};

//  описывает то какие действия захочет выполнить компонент, какие действия будет передавать в STORE
const mapDispatchToProps = ({ booksLoaded, booksRequested, booksError });

export default compose(
    withBookstoreService(),
    connect(mapStateToProps, mapDispatchToProps)
)(BookList);
