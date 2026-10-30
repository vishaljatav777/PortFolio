import { apiClient } from './api';
import { projectsData } from '../data/projectsData';

export async function fetchProjects() {
  try {
    const response = await apiClient('/projects');
    if (response && response.data && Array.isArray(response.data) && response.data.length > 0) {
      return response.data;
    }
    return projectsData;
  } catch (error) {
    console.warn('Backend /api/projects unavailable, using fallback project data:', error.message);
    return projectsData;
  }
}

