import React, { useEffect } from 'react';
import Axios from 'axios';
import Cookies from 'js-cookie';
import jwtDecode from 'jwt-decode';

const Content = ({ posts, setLoad, setPosts, loading, owner, setOwner }) => {

    console.log(posts)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(async () => {

        const result = await Axios(
            'https://practical-react-server.herokuapp.com/v1/post/',
        );
        setLoad(false);
        setPosts(result.data);


        const response = await Axios("https://practical-react-server.herokuapp.com/v1/auth/")

        const userid = jwtDecode(Cookies.get("login")).userid
        const user = response.data.filter((dataItem) => (dataItem._id === userid));
        const userNickname = JSON.stringify(user.map((value) => { return value.nickName }))
        const nickName = userNickname.slice(2, -2)

        // const deneme1 = result.data.filter((data) => (data.who === nickName))
        // await deneme1 ? setOwner([{ who: nickName, status: true }]) : setOwner([{ status: false }])

        const newOwner = result.data.some(data => data.who === nickName) ?
            [{ who: nickName, status: true }] :
            [{ status: false }];
        setOwner(newOwner)

    }, [])

    const sil = (e) => {
        var id = e.target.getAttribute("data-id")


        console.log(id)
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


    return (
        loading ? 'yükleniyor' :

            <ul>
                {posts.slice(0).reverse().map((yazdir) => (
                    <li key={yazdir._id} className="card mt-sm-4 mb-sm-6">

                        {owner.map((data) => (
                            data.who === yazdir.who ?
                                <b data-id={yazdir._id} onClick={sil}> Sil  </b>: null))
                        }
                        <div className="card-body">
                            <blockquote className="blockquote mb-0"><p>{yazdir.post}</p><footer className="blockquote-footer"><b>{yazdir.who}</b> <cite>| {yazdir.date}</cite></footer>
                            </blockquote>
                        </div>
                    </li>
                ))}
            </ul>
    )
}

export default Content;