/**
 * Seed Database with Initial Projects
 * Usage: node scripts/seedProjects.js
 */

import mongoose from 'mongoose';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({ path: path.resolve(__dirname, '../.env') });
dotenv.config({ path: path.resolve(__dirname, '../backend/.env') });

import { INITIAL_PROJECTS } from '../shared/constants/projects.js';

const projectSchema = new mongoose.Schema(
  {
    id: { type: String, required: true, unique: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    tags: [String],
    liveLink: String,
    codeLink: String,
    image: String,
    featured: Boolean,
    order: Number,
  },
  { timestamps: true }
);

const Project = mongoose.models.Project || mongoose.model('Project', projectSchema);

async function seed() {
  const uri = process.env.MONGODB_URI;
  if (!uri) {
    console.error('Error: MONGODB_URI is not set.');
    process.exit(1);
  }

  try {
    await mongoose.connect(uri);
    console.log('Connected to MongoDB');

    for (const project of INITIAL_PROJECTS) {
      await Project.findOneAndUpdate(
        { id: project.id },
        project,
        { upsert: true, new: true }
      );
      console.log(`Seeded project: ${project.title}`);
    }

    console.log('Database seeding completed successfully.');
    await mongoose.disconnect();
    process.exit(0);
  } catch (error) {
    console.error('Failed to seed database:', error);
    process.exit(1);
  }
}

seed();
