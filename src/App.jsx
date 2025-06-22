import Sidebar from './component/Sidebar'
import MainRoutes from './route/MainRoutes'

const App = () => {
  return (
    <div className="min-h-screen flex text-white bg-gray-800">
      <Sidebar user="Vanshit" />
      <MainRoutes />
    </div>
  );
}

export default App