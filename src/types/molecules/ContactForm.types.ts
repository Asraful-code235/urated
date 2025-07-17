import { FormEvent, MouseEvent } from 'react';
import { UIComponentProps } from '../global/ui';
import { SocialLink, AnimationProps } from '../global/common';

// Contact form data interface
export interface ContactFormData {
  name: string;
  email: string;
  company?: string;
  message: string;
}

// Contact form props
export interface ContactFormProps extends UIComponentProps, AnimationProps {
  onSubmit?: (data: ContactFormData) => void | Promise<void>;
  isLoading?: boolean;
  title?: string;
  subtitle?: string;
  socials?: SocialLink[];
}

// Form submit handler type
export type FormSubmitHandler = (
  e: FormEvent<HTMLFormElement> | MouseEvent<HTMLButtonElement>
) => void;

// Contact form field props
export interface ContactFormFieldProps {
  id: string;
  label: string;
  type?: 'text' | 'email' | 'textarea';
  placeholder?: string;
  required?: boolean;
  rows?: number;
}
