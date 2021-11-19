import React from 'react'

function Sırala({ sorts, sorting }) {
    //Dropdown Sırala
    return (
        <div>
            <div className="container">
                <select value={sorts} onChange={sorting}>
                    <option value="Sort">Sırala</option>
                    <option value="Newest">Yeniye Göre Sırala</option>
                    <option value="Oldest">Eskiye Göre Sırala</option>
                    <option value="Puan">Puana Göre Sırala</option>
                    <option value="Random">Rastgele Sırala</option>
                </select>
            </div>
        </div>
    )
}
export default Sırala;