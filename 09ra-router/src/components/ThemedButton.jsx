import { useContext } from 'react';
import { ThemeContext } from './Context';

function ThemedButton() {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <button
      style={{ background: theme === 'light' ? '#fff' : '#333', color: theme === 'light' ? '#000' : '#fff' }}
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
    >
      Переключить тему
    </button>
  )
}

export default ThemedButton;