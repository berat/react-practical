import React, { useRef } from 'react';
import GitHubButton from 'react-github-btn'
import Auth from '../../Routers/sidebar.router';
import Axios from 'axios';
import Cookies from 'js-cookie';
import jwtDecode from 'jwt-decode';
import { useSelector, useDispatch } from 'react-redux';


const Sidebar = () => {
    const text = useRef();
    const PostList = useSelector((state) => (state.Reducer.posts))
    const dispatch = useDispatch();
    
    const send = e => {
        e.preventDefault();
        let editedDate = editDate(new Date());
        text.current.value === '' ? alert("Write something") : sendAPI(text.current.value, editedDate);
        text.current.value = '';
    }

    const editDate = dateTime => {
        let months = [
            "January", "February", "March", "April", "May",
            "June", "July", "August", "September",
            "October", "November", "December"
        ];
        let day = dateTime.getDate();
        let monthsNumber = dateTime.getMonth();
        let year = dateTime.getFullYear();

        return `${day} ${months[monthsNumber]} ${year}`
    }

    const sendAPI = (value, dateTime) => {
        let whichUser = jwtDecode(Cookies.get("login")).userid;
        Axios.post("https://practical-react-server.herokuapp.com/v1/post/paylas", { post: value, who: whichUser })
            .then(function (response) {
                const newPosts = [...PostList, { _id: response.data.post._id, post: value, who: response.data.post.who, date: dateTime }];
                dispatch({
                    type: 'ADDITEM',
                    payload: newPosts
                })
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    return (
        <div className="mt-sm-4 mb-sm-6">
            <Auth />
            {Cookies.get("login") ? 
            <form className="card mt-sm-4 mb-sm-6">
                <h5 className="card-header">New Post</h5>
                <div className="card-body">
                    <div className="form-group">
                        <textarea ref={text} maxLength="280" className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>
                    <button type="submit" onClick={send} className="btn btn-primary form-control">Add Post</button>
                </div>
            </form>
            : null }
            <div className="mt-sm-4 text-center">
                <GitHubButton href="https://github.com/berat/react-practical" data-size="large" data-show-count="true" aria-label="Star berat/react-practical on GitHub">Star</GitHubButton>
            </div>
        </div>
    );
}

export default Sidebar;