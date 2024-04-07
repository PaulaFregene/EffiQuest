import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
    DialogFooter,
    DialogClose
  } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Button from '@mui/material/Button';


export function MessageButton() {
  // Create a button for the place to write an encourage message
  // Once button is clicked, a dialog popup is display so user can input their message
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="messagebutton"><Button id="messagebutton" sx={{fontFamily:"Crimson", color:"black",textTransform:"none",backgroundColor:"#b1d6f9", borderColor:"#b1d6f9" }} variant="outlined"> Write Encouraging Message</Button></div>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Encouraging Message</DialogTitle>
          <DialogDescription>
            The encouraging message will be visable at random as an encouraging during your productive.
          </DialogDescription>
        </DialogHeader>
        <div className="flex items-center space-x-2"></div>
          <div className="grid flex-1 gap-2">
            <Input type="text" name="userMessage" id="userMessage" placeholder="Encouraging Message"
            />
          </div>
        <DialogFooter className="sm:justify-start">
          <DialogClose asChild>
            <Button type="submit" variant="secondary">
              Submit
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}