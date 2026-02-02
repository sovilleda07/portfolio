export type ProjectColor =
  | 'primary'
  | 'secondary'
  | 'blue'
  | 'green'
  | 'orange'
  | 'yellow';

export type ProjectData = {
  id: string;
  title: string;
  description: string;
  image?: string;
  icon?: string;
  imageOverlayColor?: ProjectColor;
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
  disabledDemo?: boolean;
};

export const projects: ProjectData[] = [
  {
    id: 'react-ecommerce',
    title: 'projects.project.ecommerce.title',
    description: 'projects.project.ecommerce.description',
    image: '/projects/ecommerce.png',
    imageOverlayColor: 'primary',
    tags: [
      'React',
      'Vite',
      'React Router',
      'JavaScript',
      'CSS',
      'API',
      'Netlifly',
    ],
    githubUrl: 'https://github.com/sovilleda07/react-ecommerce',
    liveUrl: 'https://clickshop-ecommerce.netlify.app/',
  },
  {
    id: 'rock-paper-scissors',
    title: 'projects.project.game_rock.title',
    description: 'projects.project.game_rock.description',
    image: '/projects/rock-paper-scissors.png',
    imageOverlayColor: 'secondary',
    tags: ['React', 'Vite', 'JavaScript', 'CSS', 'GitHub Pages'],
    githubUrl: 'https://github.com/sovilleda07/rock-paper-scissors-react',
    liveUrl: 'https://sovilleda07.github.io/rock-paper-scissors-react/',
  },
  {
    id: 'to-do-list',
    title: 'projects.project.todo.title',
    description: 'projects.project.todo.description',
    image: '/projects/todo-list-api.png',
    imageOverlayColor: 'blue',
    tags: [
      'Node.js',
      'Express',
      'REST API',
      'MongoDB',
      'JavaScript',
      'Handlebars',
      'Render',
    ],
    githubUrl: 'https://github.com/sovilleda07/lista-quehaceres',
    liveUrl: 'https://lista-quehaceres.onrender.com/',
  },
  {
    id: 'tickets-app',
    title: 'projects.project.tickets.title',
    description: 'projects.project.tickets.description',
    imageOverlayColor: 'orange',
    icon: 'support_agent',
    tags: [
      'PHP',
      'SQL Server',
      'REST API',
      'JavaScript',
      'jQuery',
      ' Bootstrap',
      'SASS',
    ],
    // githubUrl: '#',
    liveUrl: '#',
    disabledDemo: true,
  },
  {
    id: 'trays-app',
    title: 'projects.project.trays.title',
    description: 'projects.project.trays.description',
    imageOverlayColor: 'green',
    icon: 'agriculture',
    tags: [
      'Node.js',
      'Express',
      'REST API',
      'SQL Server',
      'JavaScript',
      'jQuery',
      'Bootstrap',
      'SASS',
      'UI/UX',
    ],
    // githubUrl: '#',
    liveUrl: '#',
    disabledDemo: true,
  },
];
