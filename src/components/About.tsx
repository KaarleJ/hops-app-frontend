import { useState, useEffect } from 'react';
import Markdown from 'markdown-to-jsx';

const About = () => {
  const [post, setPost] = useState('');

  useEffect(() => {
    import('../about.md').then((response) => {
      fetch(response.default)
        .then((response) => response.text())
        .then((response) => setPost(response))
        .catch((error) => console.error(error));
    });
  });
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <Markdown
        style={{
          fontFamily: 'Arial',
          color: 'black',
          width: '50%',
          textAlign: 'left',
          alignSelf: 'center',
          fontSize: 20,
        }}
      >
        {post}
      </Markdown>
    </div>
  );
};

export default About;
