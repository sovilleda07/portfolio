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
  githubUrl: string;
  liveUrl?: string;
  disabledDemo?: boolean;
};

export const projects: ProjectData[] = [
  {
    id: 'react-ecommerce',
    title: 'projects.project.ecommerce.title',
    description: 'projects.project.ecommerce.description',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAyGcaEm1lOtnM_lKtubPPq2TycwDJXl3kt9HeQQ9BaI_5-AtN2fmKqI7Nvr3HcovqiwS8mpdh0P3NcCd2OL3M-N2wltJMARNwrOvmUCIZ9AXk6_f2FvkfqiSoTq9eyBI5P66HhpEFwh1ZXZczXhxYS4tr3LtIKboJB2XHuuLZdUTDbRSStuSVGRmAvU0JDAD3CU8KPM5iNgA8jy7Cin1id8uuv_1XYlqVZ-2UHANpQQxUeR8FMxmH-lVsz5XZBL01AahVos3cw6uYc',
    imageOverlayColor: 'primary',
    tags: ['React', 'JavaScript', 'React Router', 'CSS'],
    githubUrl: '#',
    liveUrl: '#',
  },
  {
    id: 'rock-paper-scissors',
    title: 'projects.project.game_rock.title',
    description: 'projects.project.game_rock.description',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAyGcaEm1lOtnM_lKtubPPq2TycwDJXl3kt9HeQQ9BaI_5-AtN2fmKqI7Nvr3HcovqiwS8mpdh0P3NcCd2OL3M-N2wltJMARNwrOvmUCIZ9AXk6_f2FvkfqiSoTq9eyBI5P66HhpEFwh1ZXZczXhxYS4tr3LtIKboJB2XHuuLZdUTDbRSStuSVGRmAvU0JDAD3CU8KPM5iNgA8jy7Cin1id8uuv_1XYlqVZ-2UHANpQQxUeR8FMxmH-lVsz5XZBL01AahVos3cw6uYc',
    imageOverlayColor: 'secondary',
    tags: ['React', 'Vite', 'JavaScript', 'CSS'],
    githubUrl: '#',
    liveUrl: '#',
  },
  {
    id: 'to-do-list',
    title: 'projects.project.todo.title',
    description: 'projects.project.todo.description',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAyGcaEm1lOtnM_lKtubPPq2TycwDJXl3kt9HeQQ9BaI_5-AtN2fmKqI7Nvr3HcovqiwS8mpdh0P3NcCd2OL3M-N2wltJMARNwrOvmUCIZ9AXk6_f2FvkfqiSoTq9eyBI5P66HhpEFwh1ZXZczXhxYS4tr3LtIKboJB2XHuuLZdUTDbRSStuSVGRmAvU0JDAD3CU8KPM5iNgA8jy7Cin1id8uuv_1XYlqVZ-2UHANpQQxUeR8FMxmH-lVsz5XZBL01AahVos3cw6uYc',
    imageOverlayColor: 'blue',
    tags: ['Node.js', 'Express', 'REST API', 'JavaScript'],
    githubUrl: '#',
    liveUrl: '#',
    disabledDemo: true,
  },
  {
    id: 'movie-database',
    title: 'projects.project.movie.title',
    description: 'projects.project.movie.description',
    imageOverlayColor: 'green',
    icon: 'movie',
    tags: ['Node.js', 'Express', 'REST API', 'JavaScript'],
    githubUrl: '#',
    liveUrl: '#',
  },
  {
    id: 'weather-dashboard',
    title: 'projects.project.weather.title',
    description: 'projects.project.weather.description',
    imageOverlayColor: 'orange',
    icon: 'cloud',
    tags: ['Node.js', 'Express', 'REST API', 'JavaScript'],
    githubUrl: '#',
    liveUrl: '#',
  },
  {
    id: 'real-time-chat-app',
    title: 'projects.project.chat.title',
    description: 'projects.project.chat.description',
    imageOverlayColor: 'yellow',
    icon: 'chat',
    tags: ['Node.js', 'Express', 'REST API', 'JavaScript'],
    githubUrl: '#',
    liveUrl: '#',
  },
];
