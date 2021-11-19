import React from 'react'
import { Card } from 'react-bootstrap';

const Dizilist = (props) => {
    //Dizileri Listeleme
    return (
        <div className="row">
            {props.entries.map((entrie) => (
                <div className="col-lg-3 py-3" key={entrie.id}>
                    <Card style={{ width: '18rem' }}>
                        <img src={entrie.imageURL} className="card-img-top" alt="Örnek Dizi" />
                        <div className="card-body">
                            <h5 className="card-title">{entrie.title}</h5>
                            <h6 className="card-text">{entrie.releaseYear}</h6>
                        </div>
                    </Card>
                </div>
            ))}
        </div>
    )
}
export default Dizilist;