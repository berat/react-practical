import React, { useRef } from 'react';
import GitHubButton from 'react-github-btn'
import Auth from './auth/';

const Sidebar = ({ posts, setPosts }) => {
    const text = useRef();

    const gonder = e => {
        e.preventDefault();
        let kim = "Kim?";
        let tarih = tarihDüzenle(new Date());
        text.current.value === '' ? alert("Bir şeyler yazın.") : yazdir(text.current.value, kim, tarih);
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

    const yazdir = (value, kim, tarih) => {
        const newPosts = [{ post: value, kim: kim, date: tarih }, ...posts];
        setPosts(newPosts);
    }

    return (
        <div className="mt-sm-4 mb-sm-6">
            <Auth />
            <form className="card mt-sm-4 mb-sm-6">
                <h5 className="card-header">Paylaşımınız</h5>
                <div className="card-body">
                    <div className="form-group">
                        <textarea ref={text} className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>
                    <button type="submit" onClick={gonder} className="btn btn-primary form-control">Güncelemeyi Ekle</button>
                </div>
            </form>
            <div className="mt-sm-4 text-center">
                <GitHubButton href="https://github.com/berat/react-practical" data-size="large" data-show-count="true" aria-label="Star berat/react-practical on GitHub">Star</GitHubButton>
            </div>
        </div>
    );
}

export default Sidebar;