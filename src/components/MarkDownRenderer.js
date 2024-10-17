import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm'; // For GitHub flavored markdown like tables, strikethroughs, etc.
import rehypeRaw from 'rehype-raw'; // For rendering raw HTML inside Markdown

const MarkdownRenderer = ({ content }) => {
  // Custom styles for different HTML elements
  const styles = {
    h1: { fontSize: '2rem', color: '#333' },
    p: { lineHeight: '2', color: '#333', fontSize: 20 },
    a: { color: '#0066cc', textDecoration: 'underline' },
    code: {
      backgroundColor: '#f5f5f5',
      padding: '2px 4px',
      borderRadius: '3px',
      fontSize: 20,
    },
    ul: { paddingLeft: '20px', color: '#333', fontSize: 25 }, // Styles for unordered lists
    ol: { paddingLeft: '20px', color: '#333', fontSize: 25 }, // Styles for ordered lists
    li: { marginBottom: '8px' }, // Space between list items
    img: { maxWidth: '100%', height: 'auto' },
    codeBlock: {
      backgroundColor: '#f5f5f5',
      border: '1px solid #ccc', // Border for the square
      borderRadius: '5px',
      padding: '10px',
      margin: '10px 0',
      overflow: 'auto', // Allow scrolling if content is too large
    },
  };

  const CodeBlock = ({ children }) => (
    <div style={styles.codeBlock}>
      <pre style={{ margin: 0 }}>{children}</pre>
    </div>
  );

  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      rehypePlugins={[rehypeRaw]}
      components={{
        h1: ({ node, ...props }) => <h1 style={styles.h1} {...props} />,
        p: ({ node, ...props }) => <p style={styles.p} {...props} />,
        a: ({ node, ...props }) => <a style={styles.a} {...props} />,
        code: ({ node, inline, ...props }) =>
          inline ? (
            <code style={styles.code} {...props} />
          ) : (
            <CodeBlock {...props}>{props.children}</CodeBlock>
          ),
        ul: ({ node, ...props }) => <ul style={styles.ul} {...props} />,
        ol: ({ node, ...props }) => <ol style={styles.ol} {...props} />,
        li: ({ node, ...props }) => <li style={styles.li} {...props} />,
        img: ({ node, ...props }) => <img style={styles.img} {...props} />,
      }}
    >
      {content}
    </ReactMarkdown>
  );
};

export default MarkdownRenderer;
