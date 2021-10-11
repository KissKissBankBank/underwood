import React, { createContext, useReducer } from 'react'
import { EditorState } from 'draft-js'

const initialState = {
  editorState: EditorState.createEmpty(),
  focus: false,
  editorRef: null,
  disabled: false,
}

export const EditorContext = createContext(initialState)

const reducer = (state, action) => {
  switch (action.type) {
    case 'update':
    case 'focus':
      return { ...state, ...action }
    case 'updateState':
      return { ...state, ...action.state }
  }
}

export const EditorProvider = ({
  translations,
  configResponsiveImageHandler,
  children,
}) => {
  return (
    <EditorContext.Provider
      value={useReducer(reducer, {
        ...initialState,
        translations,
        configResponsiveImageHandler,
      })}
    >
      {children}
    </EditorContext.Provider>
  )
}

export const updateState = (state) => ({
  type: 'updateState',
  state,
})

export const updateEditor = (editorState) => ({
  type: 'update',
  editorState,
})

export const updateEditorRef = (editorRef) => ({
  type: 'update',
  editorRef,
})

export const setFocus = (focus) => ({
  type: 'focus',
  focus,
})
