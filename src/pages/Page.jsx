import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectBlocksForActivePage, selectPageById, selectActivePageId } from '../store/selectors'; // Adjust path
import Text_Editor from "../component/Text_Editor";

const PageDetail = () => {
  const { pageId } = useParams(); // 👈 Extract ID from URL
  // const activePageId = useSelector(selectActivePageId);
  const currentPage = useSelector((state) =>
    selectPageById(state, pageId)
  );
  const blocks = useSelector(selectBlocksForActivePage);

// const print = ()=> console.log(blocks)

  if (!currentPage) {
    return <div>Page not found</div>;
  }

  return (
    <div className="page-container content-page">
      {/* Optionally display page title, icon, cover image here */}
      <h1 className="page-title">{currentPage.title}</h1>
      {/* Add Page Icon/Cover if they exist */}

      <div id="editorjs" className="blocks-list w-[100%] ">
        <Text_Editor />
      </div>
      {/* <button onClick={print}>Click Here</button> */}
    </div>
  );

};

export default PageDetail;



