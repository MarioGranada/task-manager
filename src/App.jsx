import { useState } from 'react';
import NewProject from './components/NewProject';
import NoProjectSelected from './components/NoProjectSelected';
import ProjectsSidebar from './components/ProjectsSidebar';
import SelectedProject from './components/SelectedProject';

function App() {
  const [projects, setProjects] = useState({
    selectedProjectId: undefined,
    projects: [],
    tasks: [],
  });

  const handleStartAddProject = () => {
    setProjects((prevState) => ({ ...prevState, selectedProjectId: null }));
  };

  const handleAddProject = (newProject) => {
    setProjects((prevState) => ({
      ...prevState,
      selectedProjectId: undefined,
      projects: [
        ...prevState.projects,
        {
          ...newProject,
          id: Math.random(),
        },
      ],
    }));
  };

  const handleCancelAddProject = () => {
    setProjects((prevState) => ({
      ...prevState,
      selectedProjectId: undefined,
    }));
  };

  const handleSelectProject = (id) => {
    setProjects((prevState) => ({
      ...prevState,
      selectedProjectId: id,
    }));
  };

  const handleDeleteProject = () => {
    setProjects((prevState) => ({
      ...prevState,
      selectedProjectId: undefined,
      projects: prevState.projects.filter(
        (project) => project.id !== projects.selectedProjectId
      ),
    }));
  };

  const handleAddTask = (text) => {
    setProjects((prevState) => ({
      ...prevState,
      tasks: [
        ...prevState.tasks,
        {
          text,
          projectId: prevState.selectedProjectId,
          id: Math.random(),
        },
      ],
    }));
  };

  const handleDeleteTask = (id) => {
    setProjects((prevState) => ({
      ...prevState,
      tasks: prevState.tasks.filter((task) => task.id !== id),
    }));
  };

  console.log('Projects list: ', { projects });

  const selectedProject = projects.projects.find(
    (project) => project.id === projects.selectedProjectId
  );

  const selectedProjectTasks = projects.tasks.filter(
    (task) => task.projectId === projects.selectedProjectId
  );

  let content = (
    <SelectedProject
      project={selectedProject}
      onDelete={handleDeleteProject}
      onAddTask={handleAddTask}
      onDeleteTask={handleDeleteTask}
      tasks={selectedProjectTasks}
    />
  );

  if (projects.selectedProjectId === null) {
    content = (
      <NewProject
        onAddProject={handleAddProject}
        onCancel={handleCancelAddProject}
      />
    );
  } else if (projects.selectedProjectId === undefined) {
    content = <NoProjectSelected onStartAddProject={handleStartAddProject} />;
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectsSidebar
        onStartAddProject={handleStartAddProject}
        onSelectProject={handleSelectProject}
        projects={projects.projects}
        selectedProjectId={projects.selectedProjectId}
      />
      {content}
    </main>
  );
}

export default App;
