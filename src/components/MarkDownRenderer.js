import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm'; // For GitHub flavored markdown like tables, strikethroughs, etc.
import rehypeRaw from 'rehype-raw'; // For rendering raw HTML inside Markdown

const MarkdownRenderer = ({ content }) => {
  // Custom styles for different HTML elements
  const styles = {
    h1: { fontSize: '2rem', color: '#333' },
    p: { lineHeight: '1.6', color: '#333' },
    a: { color: '#0066cc', textDecoration: 'underline' },
    code: { backgroundColor: '#f5f5f5', padding: '2px 4px', borderRadius: '3px' },
  };

  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      rehypePlugins={[rehypeRaw]}
      components={{
        h1: ({ node, ...props }) => <h1 style={styles.h1} {...props} />,
        p: ({ node, ...props }) => <p style={styles.p} {...props} />,
        a: ({ node, ...props }) => <a style={styles.a} {...props} />,
        code: ({ node, ...props }) => <code style={styles.code} {...props} />,
      }}
    >
      {content}
    </ReactMarkdown>
  );
};

export default MarkdownRenderer;
