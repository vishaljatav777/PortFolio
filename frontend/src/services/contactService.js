import { apiClient } from './api';

/**
 * Submit contact inquiry to the backend REST API
 * @param {Object} formData { name: string, email: string, message: string }
 * @returns {Promise<{ success: boolean, message: string }>}
 */
export async function submitContactMessage(formData) {
  const result = await apiClient('/contact', {
    method: 'POST',
    body: JSON.stringify(formData),
  });

  return {
    success: true,
    message: result?.message || 'Thank you! Your message has been sent successfully.',
  };
}
