import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const PageDetail = () => {
  const { pageId } = useParams(); // 👈 Extract ID from URL
  const pages = useSelector((state) => state.dataSlice.data.pages);

  // Find the page with matching ID
  const currentPage = pages.find((page) => page.id === pageId);

  if (!currentPage) {
    return <div>Page not found</div>;
  }

  return (
    <div className="page">
      <h1>{currentPage.page_name}</h1>
      {/* Render your page data here */}
      {/* <pre>{JSON.stringify(currentPage.page_data, null, 2)}</pre> */}
    </div>
  );
};

export default PageDetail;
