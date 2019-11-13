import { sample } from '../data/sample';

import User from '../models/User';

//Encargado de lo qué tiene que hacer
export const resolvers = {
    //Consultas
    Query: {
        hello: () => {return 'Hola Prros'},
        greet: (root, { name }, { secret }) => { return `Hello ${name}, ${secret}` },
        tasks: (root, args) => {
            return sample;
        },
        users: async (_, args) => {
            return await User.find();
        }
    },
    //Modificacion de datos
    Mutation: {
        createTask: (_, { input }) => {
            input._id = sample.length;
            sample.push(input);
            return input;
        },
        createUser: async (_, { input }) => {
            const user = new User(input);
            await user.save();
            return user;
        },
        deleteUser: async (_, { _id }) => {
            return await User.findByIdAndDelete(_id);
        },
        updateUser: async (_, { _id, input }) => {
            return  await User.findByIdAndUpdate(_id, input, { new: true  });
        }
    }
}