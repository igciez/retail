import React from 'react';
import { ReactComponent as Logo } from '../assets/shrineLogo.svg';
import './homePage.styles.scss';

const HomePage = () => {
    return (
        <div class="home">
            <aside class="mdc-drawer shrine-drawer">
                <div class="mdc-drawer__header">
                    <Logo className="shrine-logo-drawer" />
                    <h1 class="shrine-title">SHRINE</h1>
                </div>
                <div class="mdc-drawer__content">
                    <nav class="mdc-list">
                        <a class="mdc-list-item mdc-list-item--activated" aria-selected="true" tabindex="0" href="#">
                            <span class="mdc-list-item__text">Featured</span>
                        </a>
                        <a class="mdc-list-item" href="#">
                            <span class="mdc-list-item__text">Apartment</span>
                        </a>
                        <a class="mdc-list-item" href="#">
                            <span class="mdc-list-item__text">Accessories</span>
                        </a>
                        <a class="mdc-list-item" href="#">
                            <span class="mdc-list-item__text">Shoes</span>
                        </a>
                        <a class="mdc-list-item" href="#">
                            <span class="mdc-list-item__text">Tops</span>
                        </a>
                        <a class="mdc-list-item" href="#">
                            <span class="mdc-list-item__text">Bottoms</span>
                        </a>
                        <a class="mdc-list-item" href="#">
                            <span class="mdc-list-item__text">Dresses</span>
                        </a>
                        <a class="mdc-list-item" href="#">
                            <span class="mdc-list-item__text">My Account</span>
                        </a>
                    </nav>
                </div>
            </aside>
        </div>
    );
};

export default HomePage;