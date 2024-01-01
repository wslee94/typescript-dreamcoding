{
  type ToDo = {
    title: string;
    description: string;
  };

  function display(todo: Readonly<ToDo>) {
    // todo.title = "jaja"; // Cannot assign to 'title' because it is a read-only property.ts(2540)
  }
}
