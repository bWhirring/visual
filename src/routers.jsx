import React from "react"
import Index from './views/Index'
export const router = [
  {
    path: "/",
    main: props => <Index {...props} />,
  },
  {
    path: "/login",
    main: () => <h1>login</h1>,
  },
]
