import React, {useRef} from 'react';

const Sidebar = ( {posts, setPosts} ) => {
    const text = useRef();

    const gonder = e =>{
        e.preventDefault();
        let kim = "Berat";
        let tarih = "04 Ocak 2019";
        yazdir(text.current.value, kim, tarih);
        text.current.value = '';
    }

    const yazdir = (value, kim, tarih) => {
         const newPosts = [ {text: value, kim: kim, tarih: tarih}, ...posts ];
         setPosts(newPosts);
    }

    return (
        <form className="card mt-sm-4 mb-sm-6">
            <h5 className="card-header">Paylaşımınız</h5>
            <div className="card-body">
                <div className="form-group">
                    <textarea ref={text} className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
                <button type="submit" onClick={gonder} className="btn btn-primary form-control">Güncelemeyi Ekle</button>
            </div>
        </form>
    );
}

export default Sidebar;