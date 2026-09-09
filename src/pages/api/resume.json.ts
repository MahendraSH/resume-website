import type { APIRoute } from 'astro';
import { 
  APP_CONFIG, 
  SKILL_CATEGORIES, 
  FREELANCE_SERVICES, 
  EXPERIENCES, 
  EDUCATION, 
  PROJECTS 
} from '../../config';

export const GET: APIRoute = async () => {
  const resumeData = {
    personalDetails: APP_CONFIG,
    education: EDUCATION,
    experiences: EXPERIENCES,
    skills: SKILL_CATEGORIES,
    projects: PROJECTS,
    freelanceServices: FREELANCE_SERVICES,
  };

  return new Response(JSON.stringify(resumeData), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET',
    },
  });
};
