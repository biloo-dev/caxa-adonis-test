"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Route_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Core/Route"));
const User_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/User"));
Route_1.default.get('/', async ({ view }) => {
    return view.render('welcome');
});
Route_1.default.post('login', async ({ auth, request }) => {
    const email = request.input('email');
    const password = request.input('password');
    await auth.use('web').attempt(email, password);
});
Route_1.default.get('/getUsers', async () => {
    const users = await User_1.default.all();
    return users;
});
Route_1.default.get('/setUsers', async ({}) => {
    const user = await User_1.default.createMany([
        {
            email: 'virk@adonisjs.com',
            password: 'secret',
        },
        {
            email: 'romain@adonisjs.com',
            password: 'secret',
        },
    ]);
    return user;
});
//# sourceMappingURL=routes.js.map