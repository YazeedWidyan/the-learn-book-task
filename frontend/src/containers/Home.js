import axios from "axios";
import React, { useEffect, useState } from "react";
import BookCard from "../components/BookCard";
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import { books } from "../data";
import style from "../styles/home.module.css";

const subjectsList = ["الكل", "رواية", "فلسفة"];

const Home = () => {
  const [bookList, setBookList] = useState(books);
  const [keyword, setKeyword] = useState("");
  const [selectedSubject, setSelectedSubject] = useState("الكل");

  useEffect(() => {
    if (keyword == "" && selectedSubject == "الكل") {
      getData();
    } else if (selectedSubject !== "الكل" && keyword == "") {
      getFilterResult();
    } else {
      getSearchResult();
    }
  }, [keyword, selectedSubject]);

  const getData = async () => {
    const data = await axios.get("http://localhost:5000/books");
    setBookList(data.data.books);
  };

  const getSearchResult = async () => {
    const data = await axios.get(
      `http://localhost:5000/books/search?title=${keyword}`
    );
    setSelectedSubject("الكل");
    setBookList(data.data);
  };

  const getFilterResult = async () => {
    const data = await axios.get(
      `http://localhost:5000/books/subjects/${selectedSubject}`
    );
    setBookList(data.data);
  };

  return (
    <div>
      <Header
        title={"نتائج البحث"}
        img="url('https://wallpapercave.com/wp/wp10310344.jpg')"
      />
      <SearchBar setKeyword={setKeyword} />
      <div className={style.homeContainer}>
        <div className="container">
          <div className={style.bookWrapper}>
            <div className={style.bookRightSection}>
              <div className={style.filterWrapper}>
                <div className={style.filterTitle}>
                  <h3>المواضيع</h3>
                </div>
                <div className={style.filtersList}>
                  {subjectsList.map((item) => {
                    return (
                      <div key={item} className="flex align-center">
                        <input
                          type="checkbox"
                          name={item}
                          checked={item === selectedSubject}
                          onChange={() => setSelectedSubject(item)}
                        />
                        <span>
                          <h3>{item}</h3>
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
            <div className={style.bookLeftSection}>
              {bookList?.map((book) => {
                return <BookCard key={book._id} book={book} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
