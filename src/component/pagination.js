import React, { useState, useRef } from 'react';

const Pagination = ({ posts, displayNumber }) => {

    const page = useRef();

    const gecici = posts.slice(0).reverse()
    const sabit = displayNumber ? displayNumber : 5;
    const lastElem = Number(gecici.length / sabit).toFixed(0)

    const [current, setCurrent] = useState(1);

    const dene = [];
    let degisken = 0;

    var i = 1,
        j;
    if (sabit <= gecici.length) {
        for (j = 0; j < (gecici.length / sabit); j++) {
            dene.push(
                {
                    id: i, include:
                        gecici.slice(degisken, degisken + sabit)
                }
            )
            i += 1;
            degisken += sabit
        }
    }

    const clicked = (e) => {
        e.preventDefault()
        var deger = e.target.innerHTML
        if (deger === "Önceki") {
            if (deger !== parseInt("1")) {
                setCurrent(parseInt(current) - 1)
            }
        }
        else if (deger === "Sonraki") {
            if (deger !== parseInt(lastElem)) {
                setCurrent(parseInt(current) + 1)
            }
        }
        else {
            console.log(deger)
            setCurrent(parseInt(deger))
        }
    }

    const Previous = () => (
        current != 1 ? <li onClick={clicked}>Önceki</li> : null
    )

    const Next = () => (
        current != lastElem ? <li onClick={clicked}>Sonraki</li> : null
    )

    const currentPosts = dene.filter(mevcut => mevcut.id === current).map(deger => deger.include)
    const ListCurrentPosts = (value) => (
        <li className="card mt-sm-4 mb-sm-6">
            <div className="card-body">
                {console.log(current)}
                <blockquote className="blockquote mb-0"><p>{value.value.post.substr(0, 280)}</p><footer className="blockquote-footer"><b>{value.value.who}</b> <cite>| {value.value.date}
                </cite></footer>
                </blockquote>
            </div>
        </li>
    )


    return (
        <>
            <div ref={page} className="pagination">

                <ul>
                    {currentPosts.map((value) => (
                        value.map((deger) => (
                            <ListCurrentPosts value={deger} />
                        ))
                    ))}
                </ul>
                <ul className="sayfalama">
                    <Previous />
                    {dene.map((value) => (
                        value.id !== undefined ?
                            <li class={value.id===current ? "active" : "passive"} onClick={clicked}>{value.id}</li>
                            : null
                    ))}
                    <Next />
                </ul>
            </div>
        </>
    )
}

export default Pagination;