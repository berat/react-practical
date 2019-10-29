import React, { useEffect } from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom';
import Cookies from 'js-cookie';
import jwtDecode from 'jwt-decode';
import Pagination from 'pagination-react-hooks';
import { useSelector, useDispatch } from 'react-redux';

const Content = () => {

    const postList = useSelector((state) => (state.Reducer.posts))
    const owner = useSelector((state) => (state.Reducer.owner))
    const loading = useSelector((state) => (state.loadReducer.load))
    const dispatch = useDispatch();

    useEffect(() => {
        async function synchronous() {

            dispatch(
            {
                type: 'FALSE'
            })
            if (Boolean(Cookies.get("login")) === true) {
                const response = await Axios("https://practical-react-server.herokuapp.com/v1/auth/")
                const userid = jwtDecode(Cookies.get("login")).userid
                const user = response.data.filter((dataItem) => (dataItem._id === userid));
                const userNickname = JSON.stringify(user.map((value) => { return value.nickName }))
                const nickName = userNickname.slice(2, -2)
                const newOwner = postList.some(data => data.who === nickName) ?
                [{ who: nickName, status: true }] :
                [{ status: false }];
                
                dispatch({
                    type: 'CHECK',
                    payload: newOwner
                })
            }

        }
        synchronous()

    }, [postList, dispatch])


    const deleteItem = (e) => {
        var id = e.target.getAttribute("data-id")

        Axios.post("https://practical-react-server.herokuapp.com/v1/post/sil", { id: id })
            .then(function () {
                const newPosts = [...postList];
                var value = null;
                newPosts.forEach((el, index) => {
                    el._id === id
                        ? value = index
                        : value = null
                })
                if (value != null) newPosts.splice(value, 1)
                dispatch({
                    type: 'ADDITEM',
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
                <blockquote className="blockquote mb-0"><p>{value.post.substr(0, 280)}</p><footer className="blockquote-footer"><b><Link to={"/profile/"+value.who}>{value.who}</Link></b> <cite>| {value.date}
                    {owner.map((data) => (
                        data.who) === value.who ?
                        <b data-id={value._id} onClick={deleteItem}> Delete  </b> : null)}
                </cite></footer>
                </blockquote>
            </div>
        </li>
    )


    return (
        loading ? 'loading...' :
            <ul>
                <Pagination
                    data={postList.slice(0).reverse()}
                    Show={Show}
                    displayNumber="6"
                    previousText="Previous"
                    nextText="Next"
                />
            </ul>
    )
}

export default Content;