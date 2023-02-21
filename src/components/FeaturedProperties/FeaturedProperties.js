import React from 'react'
import './featuredProperties.css'

export default function FeaturedProperties() {
    return (
        <div className="fp">
            <div className="fpItem">
                <img
                    src="https://cf.bstatic.com/xdata/images/hotel/square600/421852968.webp?k=f3889222c82f4a8e3783dddb5f1cc04d6140eeb2d5cb8297817a15aacfe4d191&o=&s=1"
                    alt=""
                    className="fpImg"
                />
                <span className="fpName">3 Epoques Apartments </span>
                <span className="fpCity">Prague 1,Czech Republic, Praha 1</span>
                <span className="fpPrice">Starting from 8,447.Rs</span>
                <div className="fpRating">
                    <button>8.7</button>
                    <span>Excellent- 406 reviews</span>
                </div>
            </div>
            <div className="fpItem">
                <img
                    src="https://cf.bstatic.com/xdata/images/hotel/square600/44146554.webp?k=bc461f3aff9a66c15ddae3b3a7e10a44f6aea550cb89ce292cec7ca0b4ccecdb&o=&s=1"
                    alt=""
                    className="fpImg"
                />
                <span className="fpName">Villa Domina</span>
                <span className="fpCity">Split City Center, Croatia, Split</span>
                <span className="fpPrice">Starting from 3,975.Rs</span>
                <div className="fpRating">
                    <button>9.4</button>
                    <span>Wonderful- 1,036 reviews</span>
                </div>
            </div>
            <div className="fpItem">
                <img
                    src="https://cf.bstatic.com/xdata/images/hotel/square600/87428762.webp?k=9a065fcd92168145d8c8358701662c76793535597b678efc8f6921c8e3c188e6&o=&s=1"
                    alt=""
                    className="fpImg"
                />
                <span className="fpName">7Seasons Apartments Budapest</span>
                <span className="fpCity">06. Terezvaros,Hungary,Budapest</span>
                <span className="fpPrice">Starting from 12,384.Rs</span>
                <div className="fpRating">
                    <button>8.9</button>
                    <span>Excellent-7,278 reviews</span>
                </div>
            </div>
            <div className="fpItem">
                <img
                    src="https://cf.bstatic.com/xdata/images/hotel/square600/95058973.webp?k=979587fd2ac8f7777a34758264d557eef57d0e98e58bdaeb121f5b968a20f810&o=&s=1"
                    alt=""
                    className="fpImg"
                />
                <span className="fpName">Oriente Palace Apartments</span>
                <span className="fpCity">Madrid City Center, Spain, Madrid</span>
                <span className="fpPrice">Starting from 7,976.Rs</span>
                <div className="fpRating">
                    <button>8.9</button>
                    <span>Excellent-2,547 reviews</span>
                </div>
            </div>
        </div>
    )
}
