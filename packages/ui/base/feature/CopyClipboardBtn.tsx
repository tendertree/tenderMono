"use client"

import { useState } from "react"
import { Button, ButtonProps } from "../shadcn/button"
import { Copy, CopyCheck, CopyX } from "lucide-react"

type CopyState = "idle" | "copied" | "error"

export function CopyClipboardBtn({
  text,
  ...buttonProps
}: Omit<ButtonProps, "children" | "onClick"> & {
  text: string
}) {
  const [copyState, setCopyState] = useState<CopyState>("idle")

  const CopyIcon = getCopyIcon(copyState)

  return (
    <Button
      {...buttonProps}
      onClick={() => {
        navigator.clipboard
          .writeText(`${text}`)
          .then(() => {
            setCopyState("copied")
            setTimeout(() => setCopyState("idle"), 2000)
          })
          .catch(() => {
            setCopyState("error")
            setTimeout(() => setCopyState("idle"), 2000)
          })
      }}
    >
      <CopyIcon className="size-4 mr-2" />
      {getChildren(copyState)}
    </Button>
  )
}

function getCopyIcon(copyState: CopyState) {
  switch (copyState) {
    case "idle":
      return Copy
    case "copied":
      return CopyCheck
    case "error":
      return CopyX
  }
}

function getChildren(copyState: CopyState) {
  switch (copyState) {
    case "idle":
      return "Copy Link"
    case "copied":
      return "Copied!"
    case "error":
      return "Error"
  }
}
