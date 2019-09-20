import React, { useEffect } from 'react';
import Axios from 'axios';
import Cookies from 'js-cookie';
import jwtDecode from 'jwt-decode';
import Pagination from 'pagination-react-hooks';
import { useSelector, useDispatch } from 'react-redux';

const Content = ({ posts, setLoad, setPosts, loading, owner, setOwner }) => {

    const yazilar = useSelector((state) => (state.posts))
    const dispatch = useDispatch();

    useEffect(() => {
        async function senkron() {
            const result = await Axios(
                'https://practical-react-server.herokuapp.com/v1/post/',
            );
            setLoad(false);
            dispatch({
                type: 'EKLE',
                payload: result.data
            })
            // setPosts(result.data);

            if (Boolean(Cookies.get("login")) === true) {
                const response = await Axios("https://practical-react-server.herokuapp.com/v1/auth/")
                const userid = jwtDecode(Cookies.get("login")).userid
                const user = response.data.filter((dataItem) => (dataItem._id === userid));
                const userNickname = JSON.stringify(user.map((value) => { return value.nickName }))
                const nickName = userNickname.slice(2, -2)

                const newOwner = result.data.some(data => data.who === nickName) ?
                    [{ who: nickName, status: true }] :
                    [{ status: false }];
                setOwner(newOwner)
            }
        }
        senkron()


    }, [dispatch])

    const sil = (e) => {
        var id = e.target.getAttribute("data-id")

        Axios.post("https://practical-react-server.herokuapp.com/v1/post/sil", { id: id })
            .then(function (response) {
                const newPosts = [...posts];
                var value = null;
                newPosts.forEach((el, index) => {
                    el._id === id ? value = index : value = null
                })
                if (value != null) newPosts.splice(value, 1)
                // setPosts(newPosts);
                dispatch({
                    type: 'Ekle',
                    payload: newPosts
                })
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    const Show = (value) => (
        <li className="card mt-sm-4 mb-sm-6">
            <div className="card-body">
                <blockquote className="blockquote mb-0"><p>{value.post.substr(0, 280)}</p><footer className="blockquote-footer"><b>{value.who}</b> <cite>| {value.date}

                    {owner.map((data) => (
                        data.who === value.who ?
                            <b data-id={value._id} onClick={sil}> Sil  </b> : null))}
                </cite></footer>
                </blockquote>
            </div>
        </li>
    )

    return (
        loading ? 'yükleniyor' :

            <ul>
                {yazilar.map((data) => (
                    <Pagination
                        data={data}
                        Show={Show}
                        displayNumber="6"
                        previousText="Önceki"
                        nextText="Sonraki"
                    />
                ))}
            </ul>
    )
}

export default Content;