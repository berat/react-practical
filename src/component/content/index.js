import React, { useState } from 'react';

const Content = () => {

    const [posts, setPosts] = useState([
        { text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.", kim: "Berat", tarih: "31 Temmuz 2019" },
        { text: "Lorem1 ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.", kim: "Berat2", tarih: "21 Temmuz 2019" },
        { text: "Lorem2 ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.", kim: "Berat1", tarih: "11 Temmuz 2019" },
    ])

    const Goster = ({ yazi }) =>
        <div className="card mt-sm-4 mb-sm-6">
            <div className="card-body">
                <blockquote className="blockquote mb-0"><p>{yazi.text}</p><footer className="blockquote-footer"><b>{yazi.kim}</b> <cite title="Source Title">| {yazi.tarih}</cite></footer>
                </blockquote>
            </div>
        </div>

    return (
        posts.map((yazdir) => (
            <Goster yazi={yazdir} />
        ))

    );
}

export default Content;