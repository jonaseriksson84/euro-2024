import { Input } from './input'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from './tooltip'

export const TooltipPassword = () => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <div className="relative">
            <Input
              id="password"
              name="password"
              placeholder="Password"
              type="password"
              className="pl-10"
              required
              autoComplete="off"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="absolute w-5 text-[hsl(var(--muted-foreground))] top-1/4 left-2 lucide lucide-key"
            >
              <circle cx="7.5" cy="15.5" r="5.5"></circle>
              <path d="m21 2-9.6 9.6"></path>
              <path d="m15.5 7.5 3 3L22 7l-3-3"></path>
            </svg>
          </div>
        </TooltipTrigger>
        <TooltipContent>
          <p>
            Between 4 ~ 31 characters, and only consists of lowercase letters,
            0-9, -, and _
          </p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}
