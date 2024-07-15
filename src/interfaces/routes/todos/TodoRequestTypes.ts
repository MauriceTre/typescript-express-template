export interface IMarkTodoBody {
    todoId: number;
    newIsDone: boolean;
  }
export interface IUpdateTodoBody {
    todoId: number;
    newTask: string;
    newIsDone: boolean;
    newDueDate: string;
}
export interface ICreateTodoBody {
    newTask: string;
    newIsDone: boolean;
    newDueDate: string;
    newUserId: number;
}
export interface IDeleteTodoBody {
    todoId: number;
}