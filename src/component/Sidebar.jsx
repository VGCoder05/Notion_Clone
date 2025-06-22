import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { update } from "../store/reducer/dataSlice";
import { nanoid } from "nanoid";

const Sidebar = ({ user, page_name = "Page" }) => {
  // const data = useSelector((state) => console.log(state.data.pages));
  const data = useSelector((state) => state.dataSlice.data);
  const dispatch = useDispatch();

  return (
    <div className="Sidebar px-2 py-4 w-[20%] bg-gray-300">
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
          onClick={() =>
            dispatch(
              update({
                id: nanoid(),
                page_name: "page 02",
                page_data: [{}],
              })
            )
          }
        />
      </div>
      <Link to=""></Link>
      <Link to=""></Link>
      <div className="Private">
        <p>Private</p>
        {data.pages.map((page) => (
          <Link to="/Page" className="flex gap-1.5">
            <img className="icon" src="icons/book-closed_gray.svg" alt="" />
            <p>{page.page_name}</p>
          </Link>
        ))}
      </div>
      <button onClick={() => console.log(data)}>Click</button>
    </div>
  );
};

export default Sidebar;
