import { ComponentProps } from 'react';
import { UIComponentProps, InputVariant } from '../global/ui';
import { FormFieldProps } from '../global/common';

// Input component props
export interface InputProps extends 
  ComponentProps<'input'>, 
  UIComponentProps,
  FormFieldProps {
  variant?: InputVariant;
}

// Textarea component props
export interface TextareaProps extends 
  ComponentProps<'textarea'>, 
  UIComponentProps,
  FormFieldProps {}

// Input ref types
export type InputRef = HTMLInputElement;
export type TextareaRef = HTMLTextAreaElement;
