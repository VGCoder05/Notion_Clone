import Sidebar from './component/Sidebar'
import MainRoutes from './route/MainRoutes'

const App = () => {
  return (
    <div className="min-h-screen flex  bg-yellow-100">
      <Sidebar user="Vanshit" />
      <MainRoutes />
    </div>
  );
}

export default App