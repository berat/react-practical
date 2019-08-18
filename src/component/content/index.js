import React from 'react';
import Axios from 'axios';

const Content = ({ posts, setPosts, loading, owner }) => {
    
    const map = new Map();

    var deger = null;

    const degerAta = (id) => {

        map.set(deger, id)
    }

    const sil = (e) => {
        var id = map.get(deger);
        Axios.post("https://practical-react-server.herokuapp.com/v1/post/sil", { id: id})
            .then(function (response) {
                const newPosts = [...posts];
                var value = null;
                newPosts.forEach((el,index) => {
                    el._id===id ? value=index : value = null
                })
                if (value != null) newPosts.splice(value,1)
                setPosts(newPosts);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    const Goster = ({ yazi }) => 

        <li key={yazi._id} className="card mt-sm-4 mb-sm-6"><b onClick={sil}> sil</b> {degerAta(yazi._id)}
            <div className="card-body">
                <blockquote className="blockquote mb-0"><p>{yazi.post}</p><footer className="blockquote-footer"><b>{yazi.who}</b> <cite title="Source Title">| {yazi.date}</cite></footer>
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