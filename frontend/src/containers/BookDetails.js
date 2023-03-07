import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import Header from "../components/Header";
import style from "../styles/bookDetails.module.css";
import { RiBookOpenLine } from "react-icons/ri";

const BookDetails = () => {
  const [book, setBook] = useState({});
  const { id } = useParams();

  useEffect(() => {
    getBook();
  }, []);

  const getBook = async () => {
    const data = await axios.get(`http://localhost:5000/books/${id}`);
    setBook(data.data.Book);
  };

  return (
    <div>
      <Header
        title={"تفاصيل الكتاب"}
        img="url('https://wallpaperboat.com/wp-content/uploads/2020/09/14/54601/books-02.jpg')"
      />
      <div className={style.BookDetailsContainer}>
        <div className="container">
          <div className={style.BookDetailsWrapper}>
            <div className={style.div1}>
              <img className={style.BookDetailsImg} src={book.cover} alt="" />
            </div>
            <div className={style.div2}>
              <div className={style.bookTag}>
                <RiBookOpenLine size={28} color="white" />
                <h3>كتاب</h3>
              </div>
              <h3>{book.title}</h3>
              <p>
                تأليف: <span className="text-blue">{book.authors}</span>
              </p>
              <p>
                الناشر: <span className="text-blue">{book.publisherName}</span>
              </p>
              <p>
                تاريخ النشر:{" "}
                <span className="text-blue">{book.yearOfPublication}</span>
              </p>
              <div className={style.pillRow}>
                <p>الوسوم:</p>
                {book?.subjects?.map((subject) => {
                  return (
                    <p key={subject} className="pill-rounded">
                      {subject}
                    </p>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
