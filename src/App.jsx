import { Route, Routes } from "react-router";
import Layout from "./components/Layout";
import DashboardPage from "./pages/DashboardPage";
import NotFoundPage from "./pages/NotFoundPage";
import TaskDetailPage from "./pages/TaskDetailPage";
import TaskPage from "./pages/TaskPage";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<DashboardPage />} />
        <Route path="tasks" element={<TaskPage />} />
        <Route path="tasks/:id" element={<TaskDetailPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}
