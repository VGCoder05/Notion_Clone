import { Link } from 'react-router-dom';

const renderInternalPageLink = ({ pageId, pageTitle }) => {
        return (
          <Link to={`/page/${pageId}`} className="internal-link">
            📄 {pageTitle}
          </Link>
        );
      };
      
export default renderInternalPageLink