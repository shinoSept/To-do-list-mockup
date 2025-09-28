import { Header } from "./components/Header.tsx";
import { Footer } from "./components/Footer.tsx";
import { Sidebar } from "./components/Sidebar.tsx";
import { TaskInput } from "./components/TaskInput.tsx";
import { TaskCard } from "./components/Task.tsx";
import type { TaskCardProps } from "./libs/types.ts";

function App() {
  const tasks: TaskCardProps[] = [
    {
      id: 1,
      title: "Read a book",
      description: "Vite + React + Bootstrap + TS",
      isDone: false,
    },
    {
      id: 2,
      title: "Write code",
      description: "Finish project for class",
      isDone: false,
    },
    {
      id: 3,
      title: "Deploy app",
      description: "Push project to GitHub Pages",
      isDone: false,
    },
  ];
  return (
    <div className="d-flex flex-column" style={{ minHeight: "100vh" }}>
      {/* Header ด้านบน */}
      <Header />
      <div className="d-flex flex-grow-1">
        {/* Sidebar ด้านซ้าย */}
        <Sidebar userName="shino" type="admin" />
        {/* Main content */}
        <div className="container text-center">
          <main className="flex-grow-1 p-4">
            {/* input ด้านบน*/}
            <TaskInput />
            {/* Card รายการ */}
            {tasks.map((task) => (
              <TaskCard
                id={task.id}
                title={task.title}
                description={task.description}
                isDone={task.isDone}
              />
            ))}
          </main>
        </div>
      </div>
      {/* Footer ด้านล่าง */}
      <Footer year="2026" fullName="shino" studentId="000"></Footer>
    </div>
  );
}

export default App;
