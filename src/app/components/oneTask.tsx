import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"


export default function OneTask({task}) {
    //task has a taskName, taskHours, taskMinutes
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Task</TableHead>
          <TableHead className="text-right">Duration</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
          <TableRow key={task.task}>
            <TableCell className="font-medium">{task.name}</TableCell>
            <TableCell className="text-right">{task.minutes}</TableCell>
          </TableRow>
      </TableBody>
    </Table>
  )
}