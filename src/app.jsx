import { Logo } from './logo'

export function App(props) {
  return (
    <div class="flex flex-col items-center justify-center">
      <Logo />
      <p>Hello Vite + Preact!</p>
      <p>
        <a
          class="link"
          href="https://preactjs.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn Preact
        </a>
      </p>
    </div>
  )
}
