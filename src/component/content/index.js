import React, { useEffect } from 'react';
import Axios from 'axios';
import Cookies from 'js-cookie';
import jwtDecode from 'jwt-decode';
import Pagination from './Pagination';

const Content = ({ posts, setLoad, setPosts, loading, owner, setOwner }) => {


    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(async () => {

        const result = await Axios(
            'https://practical-react-server.herokuapp.com/v1/post/',
        );
        setLoad(false);
        setPosts(result.data);

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

    }, [])

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
                setPosts(newPosts);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    const show = (value) => (
        <li className="card mt-sm-4 mb-sm-6">
                 <div className="card-body">
                     <blockquote className="blockquote mb-0"><p>{value.value.post.substr(0, 280)}</p><footer className="blockquote-footer"><b>{value.value.who}</b> <cite>| {value.value.date}
                        
                             {owner.map((data) => (
                                data.who === value.value.who ?
                                    <b data-id={value.value._id} onClick={sil}> Sil  </b> : null))}
                        </cite></footer>
                     </blockquote>
                 </div>
             </li>
    )

    return (
        loading ? 'yükleniyor' :

            <ul>
                <Pagination
                    posts={posts}
                    Show={show}
                    displayNumber="5"
                    previousText="Önceki"
                    nextText="Sonraki"
                />
            </ul>
    )
}

export default Content;