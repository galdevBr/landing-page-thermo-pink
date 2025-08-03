import { Loader } from "lucide-react";

export function LoaderComponent() {
  return (
    <div className="flex items-center justify-center animate-spin">
      <Loader />
    </div>
  )
}