import React, { useEffect, useState } from "react";
import Header from "../Component/Hader";
import NavBar from "../Component/NavBar";
import RightSide from "../Component/RightSide";
import NewsDetailCard from "../Component/NewsDetailCard";
import { useLoaderData, useParams } from "react-router";

const NewsDetails = () => {
    const data = useLoaderData();
    const { id } = useParams();
    const [news, setNews] = useState({});

    useEffect(() => {
        if (data) {
            const newsDetail = data.find((singleNews) => singleNews.id == id);
            setNews(newsDetail);
        }
    }, [data, id]);


    // if (!news) return <p className="text-center mt-10">Loading...</p>;

    return (
        <div>
            <header>
                <Header />
                <NavBar />
            </header>

            <main className="w-11/12 mx-auto grid grid-cols-12 gap-5 py-10">
                <section className="col-span-9">
                    <h2 className="font-bold mb-6 text-xl">News Details</h2>
                    <NewsDetailCard news={news} />
                </section>

                <aside className="col-span-3">
                    <RightSide />
                </aside>
            </main>
        </div>
    );
};

export default NewsDetails;
