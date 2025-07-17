import { UIComponentProps } from '../global/ui';

// Code block tab configuration
export interface CodeBlockTab {
  name: string;
  code: string;
  language?: string;
  highlightLines?: number[];
}

// Base code block props
interface BaseCodeBlockProps extends UIComponentProps {
  language: string;
  filename: string;
  highlightLines?: number[];
}

// Code block with single code content
interface SingleCodeBlockProps extends BaseCodeBlockProps {
  code: string;
  tabs?: never;
}

// Code block with multiple tabs
interface TabbedCodeBlockProps extends BaseCodeBlockProps {
  code?: never;
  tabs: CodeBlockTab[];
}

// Union type for code block props
export type CodeBlockProps = SingleCodeBlockProps | TabbedCodeBlockProps;
