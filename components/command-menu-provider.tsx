"use client"

import type React from "react"

import { createContext, useContext, useState } from "react"

type CommandMenuContextType = {
  open: boolean
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const CommandMenuContext = createContext<CommandMenuContextType>({
  open: false,
  setOpen: () => {},
})

export function CommandMenuProvider({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false)

  return <CommandMenuContext.Provider value={{ open, setOpen }}>{children}</CommandMenuContext.Provider>
}

export const useCommandMenu = () => useContext(CommandMenuContext)
