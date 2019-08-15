import React, { useRef } from 'react';
import GitHubButton from 'react-github-btn'
import Auth from './auth/';
import Axios from 'axios';
import Cookies from 'js-cookie';
import jwtDecode from 'jwt-decode';


const Sidebar = ({ posts, setPosts }) => {
    const text = useRef();

    
    const gonder = e => {
        e.preventDefault();
        let tarih = tarihDüzenle(new Date());
        text.current.value === '' ? alert("Bir şeyler yazın.") : yazdir(text.current.value, tarih);
        text.current.value = '';
    }

    const tarihDüzenle = tarih => {
        let aylar = [
            "Ocak", "Şubat", "Mart", "Nisan", "Mayıs",
            "Haziran", "Temmuz", "Ağustos", "Eylül",
            "Ekim", "Kasım", "Aralık"
        ];
        let gün = tarih.getDate();
        let aySayi = tarih.getMonth();
        let yil = tarih.getFullYear();

        return gün + ' ' + aylar[aySayi] + ' ' + yil;
    }

    const yazdir = (value, tarih) => {
        let whichUser = jwtDecode(Cookies.get("login")).userid;
        console.log("deneme 1 : " + whichUser);
        Axios.post("https://practical-react-server.herokuapp.com/v1/post/paylas", { post: value, who: whichUser })
            .then(function (response) {
                const newPosts = [{ _id: response.data.post._id, post: value, who: response.data.post.who, date: tarih }, ...posts];
                setPosts(newPosts);
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
                <h5 className="card-header">Paylaşımınız</h5>
                <div className="card-body">
                    <div className="form-group">
                        <textarea ref={text} className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>
                    <button type="submit" onClick={gonder} className="btn btn-primary form-control">Güncelemeyi Ekle</button>
                </div>
            </form>
            : console.log("2")}
            <div className="mt-sm-4 text-center">
                <GitHubButton href="https://github.com/berat/react-practical" data-size="large" data-show-count="true" aria-label="Star berat/react-practical on GitHub">Star</GitHubButton>
            </div>
        </div>
    );
}

export default Sidebar;