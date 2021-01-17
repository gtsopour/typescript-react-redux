const projects = [
  {
    "id": 1,
    "name": "Typescript React Redux Webpack Sass Starter"
  }
];

class ProjectsService {
  fetchProjects = () => {
    return new Promise((resolve) => {
      resolve(projects);
    });
  }
}

export const projectsService: ProjectsService = new ProjectsService();
