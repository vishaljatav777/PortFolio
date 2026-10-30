import { Project } from '../models/Project.js';
import { isDbConnected } from '../config/db.js';
import { INITIAL_PROJECTS } from '../constants/projects.js';
import { logger } from '../utils/logger.js';

export async function getAllProjects() {
  if (isDbConnected()) {
    try {
      const dbProjects = await Project.find().sort({ order: 1, createdAt: -1 });
      if (dbProjects && dbProjects.length > 0) {
        return dbProjects;
      }
    } catch (err) {
      logger.warn('Error fetching projects from MongoDB, using fallback:', err.message);
    }
  }

  return INITIAL_PROJECTS;
}

export async function getProjectById(id) {
  if (isDbConnected()) {
    try {
      const project = await Project.findOne({ $or: [{ _id: id }, { id }] });
      if (project) return project;
    } catch {
      // Fallback
    }
  }

  const found = INITIAL_PROJECTS.find((p) => p.id === id);
  return found || null;
}
