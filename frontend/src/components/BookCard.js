import React from "react";
import { useNavigate } from "react-router-dom";
import style from "../styles/bookCard.module.css";
import {
  RxQuestionMarkCircled,
  RxCopy,
  RxDownload,
  RxShare2,
} from "react-icons/rx";

const BookCard = ({ book }) => {
  const {
    _id: id,
    title,
    authors,
    subjects,
    yearOfPublication,
    publisherName,
    cover,
  } = book;
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/book/${id}`)}
      className={style.BookCardContainer}
    >
      <div className={style.div1}>
        <img className={style.bookCardImg} src={cover} alt="" />
      </div>
      <div className={style.div2}>
        <h3>{title}</h3>
        <div className="flex justify-between">
          <p>
            تأليف: <span className="text-blue">{authors}</span>
          </p>
          <p>
            تاريخ النشر: <span className="text-blue">{yearOfPublication}</span>
          </p>
        </div>
        <div className="flex justify-between">
          <p>
            الناشر: <span className="text-blue">{publisherName}</span>
          </p>
        </div>
        <p>
          المواضيع الرئيسية:
          {subjects?.map((subject) => {
            return (
              <span key={subject} className="text-blue">
                {subject}
              </span>
            );
          })}
        </p>
        <div className={style.pillRow}>
          <p>الوسوم:</p>
          <p className="pill-rounded">وصف</p>
          <p className="pill-rounded">وصف</p>
          <p className="pill-rounded">وصف</p>
          <p className="pill-rounded">وصف</p>
        </div>
      </div>

      <div className={style.div3}>
        <RxQuestionMarkCircled size={28} color="rgb(157 157 157)" />
        <RxCopy size={28} color="rgb(157 157 157)" />
        <RxDownload size={28} color="rgb(157 157 157)" />
        <RxShare2 size={28} color="rgb(157 157 157)" />
      </div>
    </div>
  );
};

export default BookCard;
