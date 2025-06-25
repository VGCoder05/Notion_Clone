import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { update, setActiveID } from "../store/reducer/dataSlice";
import { nanoid } from "nanoid";
import { useState } from "react";
import { selectAllPages } from "../store/selectors";

const Sidebar = ({ user, page_name = "Page" }) => {
  const data = useSelector((state) => state.data);
  const pages = useSelector(selectAllPages);
  
// console.log(pages)

  const dispatch = useDispatch();

  // Temp
  const [count, setcount] = useState(2);

  return (
    <div className="Sidebar px-2 py-4 w-[20%] text-black bg-gray-300">
      <div className="user w-[100%] flex justify-between items-center">
        <p className="text-xl font-bold">
          <span className="mr-2 px-2 py-1 text-[16px] bg-gray-400 rounded-[0.2rem]">
            {user[0]}
          </span>
          {user}
        </p>
        <img
          className="icon"
          src="icons/new_note.svg"
          alt=""
          onClick={() => {
            dispatch(
              update({
                id: nanoid(),
                title: `page ${count < 10 ? `0${count}` : `${count}`}`,
                icon: "📄",
                coverImage: null,
                blocks: [],
                parentId: null,
                childPageIds: [],
              })
            );

            // Temp
            setcount((prev) => prev + 1);
          }}
        />
      </div>
      <Link to="/search" className="flex gap-1.5">
        <img className="icon" src="icons/search.svg" alt="" />
        <p>Search</p>
      </Link>
      <Link to="/" className="flex gap-1.5">
        <img className="icon" src="icons/home.svg" alt="" />
        <p>Home</p>
      </Link>
      <Link to="/inbox" className="flex gap-1.5">
        <img className="icon" src="icons/inbox.svg" alt="" />
        <p>Inbox</p>
      </Link>

      {/* Private Pages Section */}
      <div className="Private">
        <p>Private</p>
        {pages.map((page) => (
          <Link
            key={page.id}
            to={`/page/${page.id}`}
            className="flex gap-1.5"
            onClick={dispatch(setActiveID(page.id))}
          >
            <img className="icon" src="icons/book-closed_gray.svg" alt="" />
            <p>{page.title}</p>
          </Link>
        ))}
      </div>
      <button onClick={() => console.log(data)}>Click</button>
    </div>
  );
};

export default Sidebar;
