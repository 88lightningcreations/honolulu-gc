'use server'
 
import { z } from 'zod'
 
const schema = z.object({
  name: z.string(),
  email: z.string().email(),
  phone: z.string(),
  subject: z.string(),
  message: z.string()
})
 
export async function submitContactForm(prevState: unknown, formData: FormData) {
  const validatedFields = schema.safeParse({
    name: formData.get('name'),
    email: formData.get('email'),
    phone: formData.get('phone'),
    subject: formData.get('subject'),
    message: formData.get('message'),
  })
 
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    }
  }
  
  // Here you would typically send an email, save to a database, etc.
  // For this example, we'll just simulate a successful submission.
  console.log('Form data submitted:', validatedFields.data);

  return { message: 'Success!' }
}