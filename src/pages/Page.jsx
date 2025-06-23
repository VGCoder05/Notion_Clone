import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectBlocksForActivePage, selectPageById, selectActivePageId } from '../store/selectors'; // Adjust path
import BlockRenderer from '../component/BlockRenderer'; // We'll create this next

const PageDetail = () => {
  const { pageId } = useParams(); // 👈 Extract ID from URL
  const pages = useSelector((state) => state.dataSlice.data.pages);
  const activePageId = useSelector(selectActivePageId);
  const currentPage = useSelector(state => selectPageById(state, activePageId));
  const blocks = useSelector(selectBlocksForActivePage);

  if (!currentPage) {
    return <div>Page not found</div>;
  }

  return (
    <div className="page-container">
      {/* Optionally display page title, icon, cover image here */}
      <h1 className="page-title">{currentPage.title}</h1>
      {/* Add Page Icon/Cover if they exist */}

      <div className="blocks-list">
        {blocks.map((block) => (
          <BlockRenderer key={block.id} block={block} pageId={activePageId} />
        ))}
      </div>
    </div>
  );

};

export default PageDetail;



