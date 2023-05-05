import { useEffect, useRef, useState } from "react";

function Help(props) {
  const [hidden, setHidden] = useState(true);
  const element = useRef();

  useEffect(() => {
    const cb = (event) => {
      const target = event.target;

      if (target === element.current || element.current.contains(target)) {
        return;
      }

      setHidden(true);
    };

    document.addEventListener('click', cb);

    return () => {
      document.removeEventListener('click', cb);
    }
  }, []);

  const style = {};

  if (!hidden) {
    style.display = 'none';
  }

  return (
    <div ref={element}>
      <button style={style} onClick={() => setHidden(false)}>Show Help</button>
      {!hidden ? props.text : null}
    </div>
  );
}

export default Help;
