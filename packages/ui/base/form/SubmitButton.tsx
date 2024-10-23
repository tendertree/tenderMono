"use client";
import { useFormStatus } from "react-dom";
import { Loader2 } from "lucide-react";
import {Button} from "../shadcn/button"
const SubmitButton = () => {
  const { pending } = useFormStatus();

  return (
    <Button type='submit'>{pending ? <>
      <Loader2 className="mr-2 h-4 w-4 animate-spin" />Creating...
    </> : "Create Project"}</Button>
  )
}

export default SubmitButton;
