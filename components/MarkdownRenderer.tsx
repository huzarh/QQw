import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

type MarkdownRendererProps = {
  markdown: string;
};

export const MarkdownRenderer = ({ markdown }: MarkdownRendererProps) => {
  return (
    <ReactMarkdown remarkPlugins={[remarkGfm]} className="prose">
      {markdown}
    </ReactMarkdown>
  );
}; 