import React, { useState } from 'react';
import Axios from 'axios';
import Pagination from 'pagination-react-hooks';
import { useSelector, useDispatch } from 'react-redux';

import Error from '../error'

const Content = (param) => {

    const username = param.match.params.username;

    const postList = useSelector((state) => (state.Reducer.posts))
    const owner = useSelector((state) => (state.Reducer.owner))
    const loading = useSelector((state) => (state.loadReducer.load))
    const dispatch = useDispatch();

    const [profilePost, setProfilePost] = useState([]);
    const [redirect, setRedirect] = useState(false);

    const findUser = () => (
        Axios.get("https://practical-react-server.herokuapp.com/v1/auth/")
            .then(response => {
                const data = response.data;
                dispatch(
                    {
                        type: 'FALSE'
                    })
                return data.filter(value => value.nickName === username)

            })
    )

    findUser()
        .then((data) => {
            if (data.length === 1) {
                const postFilter = postList.filter(value => value.who === username)
                setProfilePost(postFilter)
            }
            else {
                setRedirect(true)
            }
        })
        .catch((err) => {
            console.log(err)
        })



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
                <blockquote className="blockquote mb-0"><p>{value.post.substr(0, 280)}</p><footer className="blockquote-footer"><b>{value.who}</b> <cite>| {value.date}
                    {owner.map((data) => (
                        data.who) === value.who ?
                        <b data-id={value._id} onClick={deleteItem}> Delete  </b> : null)}
                </cite></footer>
                </blockquote>
            </div>
        </li>
    )
    return (

        loading ?
            'loading...' :
            redirect === true ?
                <Error /> :
                profilePost.length === 0 ?
                    `${profilePost} hasn't shared anything yet.` :
                    <ul>
                        <Pagination
                            data={profilePost.slice(0).reverse()}
                            Show={Show}
                            displayNumber="6"
                            previousText="Previous"
                            nextText="Next"
                        />
                    </ul>
    )
}

export default Content;