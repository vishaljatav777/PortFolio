import { getAllProjects, getProjectById } from '../services/projectService.js';
import { AppError } from '../utils/AppError.js';

export async function getProjects(req, res, next) {
  try {
    const projects = await getAllProjects();
    res.status(200).json({
      success: true,
      count: projects.length,
      data: projects,
    });
  } catch (error) {
    next(error);
  }
}

export async function getProject(req, res, next) {
  try {
    const project = await getProjectById(req.params.id);
    if (!project) {
      throw new AppError(`Project not found with id: ${req.params.id}`, 404);
    }
    res.status(200).json({
      success: true,
      data: project,
    });
  } catch (error) {
    next(error);
  }
}

