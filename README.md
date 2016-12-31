# App store - simple web-app with Angular2 framework

App deployed to [todo](todo) via todo

You can browse, add, edit, save your favorite app via different categories.
Also there's ability to rank the app if you like it.

How to run
----------

* You should have *node* and *npm* installed
* You should have *angular-cli* installed
* Open project folder and run *ng init*
* After it you could run *ng-serve*
* And open [http://localhost:4200](http://localhost:4200) to check how app working

Libraries
---------
* TypeScript
* Angular2 2.2.1
* angular-cli 1.0.0-beta.21
* Webpack for build
* Firebase for backend storage
* Bootstrap and ng2-bootstrap module

Design
------
App divided into several components and modules:

* AppModule - main module with AppComponent, HeaderComponent
* CoreModule - DropdownDirective, HomeComponent
* ShoppingListModule - ShoppingListComponent, ShoppingListAddComponent
* SharedModule - just for the sake of showing how to share CommonModule to other modules
* ApplicationsModule - AppsComponent, RecipeListComponent, RecipeItemComponent, RecipeDetailComponent, RecipeEditComponent, AppsStartComponent
