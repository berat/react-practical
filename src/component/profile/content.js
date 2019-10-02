import React from 'react';
import Axios from 'axios';
import Pagination from 'pagination-react-hooks';
import { useSelector, useDispatch } from 'react-redux';

const Content = () => {

    const yazilar = useSelector((state) => (state.Reducer.posts))
    const owner = useSelector((state) => (state.Reducer.owner))
    const loading = useSelector((state) => (state.loadReducer.load))
    const dispatch = useDispatch();
	const profile = JSON.stringify(useSelector((state) => (state.Reducer.owner)).map(value => value.who)).slice(2,-2)

    const filtrele = yazilar.filter( value => value.who===profile  )
    console.log(loading)
    

    const sil = (e) => {
        var id = e.target.getAttribute("data-id")    
        Axios.post("https://practical-react-server.herokuapp.com/v1/post/sil", { id: id })
            .then(function (response) {
                const newPosts = [...yazilar];
                var value = null;
                newPosts.forEach((el, index) => {
                    el._id === id ? value = index : value = null
                })
                if (value != null) newPosts.splice(value, 1)
                // setPosts(newPosts);
                dispatch({
                    type: 'EKLE',
                    payload: newPosts
                })
            })
            .catch(function (error) {
                console.log(error);
            });
    }


    const Show = (value) => (
        <li key="1" className="card mt-sm-4 mb-sm-6">
            <div className="card-body">
                <blockquote className="blockquote mb-0"><p>{value.post.substr(0, 280)}</p><footer className="blockquote-footer"><b>{value.who}</b> <cite>| {value.date}
                    {owner.map((data) => (
                        data.who) === value.who ?
                        <b data-id={value._id} onClick={sil}> Sil  </b> : null)}
                </cite></footer>
                </blockquote>
            </div>
        </li>
    )

    return (
        loading ? 'yükleniyor' :
                <ul>
                    <Pagination
                        data={filtrele.slice(0).reverse()}
                        Show={Show}
                        displayNumber="6"
                        previousText="Önceki"
                        nextText="Sonraki"
                    />
                </ul>
    )
}

export default Content;