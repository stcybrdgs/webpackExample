import { Editor } from '@tiptap/core'
import StarterKit from '@tiptap/starter-kit'

const myEditor = new Editor({
  element: document.querySelector('.editor'),
  extensions: [StarterKit],
  content: `
  <p>test</p>
  <p>他是我的中文老师.</p>
  <p>test</p>
  <p>你是我的朋友.</p>`,
})

export { myEditor }

