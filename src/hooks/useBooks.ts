import { useState } from "react";
import { User } from "../components/CardId";
import { Book } from "../components/BookCard";

export const useBooks = () => {
  const [user, setUser] = useState<User>({ code:'', email: '', name:' ', profile:' '});
  const [books, setBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const fetchBooks = async (imageSrc: string) => {
    try {
      setLoading(true);
      const response = await fetch("http://127.0.0.1:8000/recognition", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ img: imageSrc.split(",")[1] }),
      });
      const { user, books } = await response.json();
      setBooks(books);
      setUser(user);
      setLoading(false);
    } catch (error) {
      setError(true);
      setLoading(false);
    }
  };

  return { user, books, loading, error, fetchBooks };
};
