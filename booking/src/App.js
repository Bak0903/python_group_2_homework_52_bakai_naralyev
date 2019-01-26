import React, {Component} from 'react';
import './App.css';

class Booking_header extends Component {
    render() {
        return (
            <header className="booking_header">
                <div className="container">
                    <span className="logo">
                        <a href="#">
                            Авиабилеты
                        </a>
                    </span>
                    <ul className="booking_navbar">
                        <li className="navbar_item">
                            <a href="#">
                                Новости
                            </a>
                        </li>
                        <li className="navbar_item">
                            <a href="#">
                                Клиентам
                            </a>
                        </li>
                        <li className="navbar_item">
                            <a href="#">
                                О нас
                            </a>
                        </li>
                    </ul>
                </div>
            </header>
        );
    }
}

class Booking_sidebar extends Component {
    render() {
        return (
            <div className="booking_sidebar">
                <h3 >
                    Популярные направления
                </h3>
                <ul>
                    <li>
                        <a href="#">
                            Бишкек - Мосвка
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            Бишкек - Нью-Йорк
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            Бишкек - Токио
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            Бишкек - Ош
                        </a>
                    </li>
                </ul>
            </div>
        );
    }
}

class Booking_content extends Component {
    render() {
        return (
            <div className="booking_content">
                <h2 className="content_title">
                    Лучшие предложения дня
                </h2>
                <table>
                    <tr>
                        <th>
                            Откуда
                        </th>
                        <th>
                            Куда
                        </th>
                        <th>
                            Номер рейса
                        </th>
                        <th>
                            Цена(в сомах)
                        </th>
                        <th>
                            Дата
                        </th>
                        <th>

                        </th>
                    </tr>
                    <tr>
                        <td>
                            Бишкек
                        </td>
                        <td>
                            Москва
                        </td>
                        <td>
                            001
                        </td>
                        <td>
                            10000
                        </td>
                        <td>
                            01.02.2019
                        </td>
                        <td>
                            <a href="#">
                                Купить билет
                            </a>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Бишкек
                        </td>
                        <td>
                            Нью-Йорк
                        </td>
                        <td>
                            002
                        </td>
                        <td>
                            19000
                        </td>
                        <td>
                            02.02.2019
                        </td>
                        <td>
                            <a href="#">
                                Купить билет
                            </a>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Бишкек
                        </td>
                        <td>
                            Токио
                        </td>
                        <td>
                            003
                        </td>
                        <td>
                            15000
                        </td>
                        <td>
                            03.02.2019
                        </td>
                        <td>
                            <a href="#">
                                Купить билет
                            </a>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Бишкек
                        </td>
                        <td>
                            Ош
                        </td>
                        <td>
                            004
                        </td>
                        <td>
                            3000
                        </td>
                        <td>
                            04.02.2019
                        </td>
                        <td>
                            <a href="#">
                                Купить билет
                            </a>
                        </td>
                    </tr>
                </table>
            </div>
        );
    }
}

class Booking_footer extends Component {
    render() {
        return (
          <footer className="booking_footer">
              <h4 className="container">
                  Бронирование и заказ авиабилетов на самолет. Расписание авиарейсов и стоимость авиабилетов. 2019
              </h4>
          </footer>
        );
    }
}

class App extends Component {
    render() {
        return (
            <div className="App">
                <Booking_header/>
                <div className={"container box"}>
                    <Booking_sidebar/>
                    <Booking_content/>
                </div>
                <Booking_footer/>
            </div>
        );
    }
}

export default App;
