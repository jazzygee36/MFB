import { z } from 'zod';

// Define a base schema (plain ZodObject)
const baseIndividualSchema = z.object({
  firstName: z.string().min(3, 'This field is required'),
  lastName: z.string().min(3, 'This field is required'),
  email: z.string().min(3, 'This field is required'),
  phoneNumber: z.string().min(3, 'This field is required'),
  password: z.string().min(3, 'This field is required'),
  confirmPassword: z.string().min(3, 'This field is required'),
});

// Full schema with refinement for the entire form
export const individualSchema = baseIndividualSchema.refine(
  (data) => data.password === data.confirmPassword,
  {
    message: 'Passwords must match',
    path: ['confirmPassword'],
  }
);

// For step 1, pick only the necessary fields:
export const step1Schema = baseIndividualSchema.pick({
  firstName: true,
  lastName: true,
  email: true,
});

// For step 2, pick the remaining fields and add a refinement to ensure passwords match:
export const step2Schema = baseIndividualSchema
  .pick({
    password: true,
    confirmPassword: true,
    phoneNumber: true,
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Passwords must match',
    path: ['confirmPassword'],
  });
