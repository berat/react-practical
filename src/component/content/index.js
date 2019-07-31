import React from 'react';

const Content = ({ posts }) => {

    const Goster = ({ yazi }) =>
        <li key={yazi.id} className="card mt-sm-4 mb-sm-6">
            <div className="card-body">
                <blockquote className="blockquote mb-0"><p>{yazi.text}</p><footer className="blockquote-footer"><b>{yazi.kim}</b> <cite title="Source Title">| {yazi.tarih}</cite></footer>
                </blockquote>
            </div>
        </li>

    return (
        <ul>
            {posts.map((yazdir) => (
                <Goster yazi={yazdir} />
            ))}
        </ul>
    )
}

export default Content;