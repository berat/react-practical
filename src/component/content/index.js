import React from 'react';

const Content = ({ posts, loading }) => {

    const Goster = ({ yazi }) =>
        <li key={yazi._id} className="card mt-sm-4 mb-sm-6">
            <div className="card-body">
                <blockquote className="blockquote mb-0"><p>{yazi.post}</p><footer className="blockquote-footer"><b>{yazi.kim}</b> <cite title="Source Title">| {yazi.date}</cite></footer>
                </blockquote>
            </div>
        </li>

    return (
        loading ? 'yükleniyor' :
        <ul>
            {posts.map((yazdir) => (
                <Goster yazi={yazdir} />
            ))}
        </ul>
    )
}

export default Content;