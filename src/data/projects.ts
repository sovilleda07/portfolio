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
    title: 'React E-commerce',
    description:
      'Frontend e-commerce application built with React, featuring dynamic components, routing, and basic state management.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAyGcaEm1lOtnM_lKtubPPq2TycwDJXl3kt9HeQQ9BaI_5-AtN2fmKqI7Nvr3HcovqiwS8mpdh0P3NcCd2OL3M-N2wltJMARNwrOvmUCIZ9AXk6_f2FvkfqiSoTq9eyBI5P66HhpEFwh1ZXZczXhxYS4tr3LtIKboJB2XHuuLZdUTDbRSStuSVGRmAvU0JDAD3CU8KPM5iNgA8jy7Cin1id8uuv_1XYlqVZ-2UHANpQQxUeR8FMxmH-lVsz5XZBL01AahVos3cw6uYc',
    imageOverlayColor: 'primary',
    tags: ['React', 'JavaScript', 'React Router', 'CSS'],
    githubUrl: '#',
    liveUrl: '#',
  },
  {
    id: 'rock-paper-scissors',
    title: 'Rock Paper Scissors (React)',
    description:
      'Interactive game built with React and Vite, focused on component-based architecture, state management, and user interaction.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAyGcaEm1lOtnM_lKtubPPq2TycwDJXl3kt9HeQQ9BaI_5-AtN2fmKqI7Nvr3HcovqiwS8mpdh0P3NcCd2OL3M-N2wltJMARNwrOvmUCIZ9AXk6_f2FvkfqiSoTq9eyBI5P66HhpEFwh1ZXZczXhxYS4tr3LtIKboJB2XHuuLZdUTDbRSStuSVGRmAvU0JDAD3CU8KPM5iNgA8jy7Cin1id8uuv_1XYlqVZ-2UHANpQQxUeR8FMxmH-lVsz5XZBL01AahVos3cw6uYc',
    imageOverlayColor: 'secondary',
    tags: ['React', 'Vite', 'JavaScript', 'CSS'],
    githubUrl: '#',
    liveUrl: '#',
  },
  {
    id: 'to-do-list',
    title: 'To-Do List (API)',
    description:
      'RESTful API built with Node.js and Express that provides CRUD operations for managing tasks, demonstrating backend fundamentals and API design.',
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
    title: 'Movie Database',
    description:
      'A responsive movie discovery app that fetches data from TMDB API, featuring search functionality, category filtering, and detailed movie pages.',
    imageOverlayColor: 'green',
    icon: 'movie',
    tags: ['Node.js', 'Express', 'REST API', 'JavaScript'],
    githubUrl: '#',
    liveUrl: '#',
  },
  {
    id: 'weather-dashboard',
    title: 'Weather Dashboard',
    description:
      'Real-time weather application providing current conditions and 5-day forecasts for any city, utilizing OpenWeatherMap API and local storage for history.',
    imageOverlayColor: 'orange',
    icon: 'cloud',
    tags: ['Node.js', 'Express', 'REST API', 'JavaScript'],
    githubUrl: '#',
    liveUrl: '#',
  },
  {
    id: 'real-time-chat-app',
    title: 'Real-time Chat App',
    description:
      'A full-stack chat application enabling real-time messaging using Socket.io, with user authentication and chat room functionality.',
    imageOverlayColor: 'yellow',
    icon: 'chat',
    tags: ['Node.js', 'Express', 'REST API', 'JavaScript'],
    githubUrl: '#',
    liveUrl: '#',
  },
];
