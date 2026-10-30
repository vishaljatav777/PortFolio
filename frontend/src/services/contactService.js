import { apiClient } from './api';
import { FORMSPREE_FALLBACK_URL } from '../constants';

export async function submitContactMessage(formData) {
  // First attempt: internal Express backend
  try {
    const result = await apiClient('/contact', {
      method: 'POST',
      body: JSON.stringify(formData),
    });
    return {
      success: true,
      message: result?.message || 'Thank you! Your message has been sent successfully.',
      source: 'backend',
    };
  } catch (backendError) {
    console.warn('Backend /api/contact failed, attempting Formspree fallback:', backendError.message);

    // Fallback: direct Formspree integration
    try {
      const response = await fetch(FORMSPREE_FALLBACK_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        return {
          success: true,
          message: 'Thank you! Your message has been sent successfully.',
          source: 'formspree',
        };
      }

      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData?.error || 'Failed to submit form to fallback service.');
    } catch (fallbackError) {
      throw new Error(fallbackError.message || 'Unable to deliver message at this time.');
    }
  }
}

