export interface ITask {
  id: string;
  title: string;
  description: string;
  createdAt: number;
  status: "todo" | "inwork" | "ready";
}
