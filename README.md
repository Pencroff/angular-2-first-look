# Angular 2.0 - first look

ToDo app based on `anguls2.alpha-33` and has used inside System.js, Babel and component approach suggested by Angular 2.0

### Description

Application has independent data tier that consists of `TodoModel` and `TodoStore`.
The view tier has three component - `Main`, `ToDo List` and `ToDo Item`.
Also was used Angular 2.0 DI based on types, but in current type Babel (babel-core@5.8.20)
doesn't support `@Inject` and `@Injectable` annotations, and was used DI declarations for ES5.


