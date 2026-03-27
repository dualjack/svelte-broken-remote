import {query, command} from "$app/server";
import {z} from "zod";

export const getList = query(z.object({
    organisationId: z.number().positive()
}), async (data) => {

    const list: string[] = [];

    for(let x = 0; x < 5; x++){
        list.push(crypto.randomUUID());
    }

    return {
        organisationId: data.organisationId,
        list
    }

});

export const getList2 = query(z.object({
    organisationId: z.number().positive()
}), async (data) => {

    const list: string[] = [];

    for(let x = 0; x < Math.floor(Math.random() * (5 - 1) + 5); x++){
        list.push(crypto.randomUUID());
    }

    return {
        organisationId: data.organisationId,
        list
    }

});

export const getList3 = query(z.object({
    organisationId: z.number().positive()
}), async (data) => {

    const list: string[] = [];

    for(let x = 0; x < Math.floor(Math.random() * (5 - 1) + 5); x++){
        list.push(crypto.randomUUID());
    }

    return {
        organisationId: data.organisationId,
        list
    }

});

export const getList4 = query(z.object({
    organisationId: z.number().positive()
}), async (data) => {

    const list: string[] = [];

    for(let x = 0; x < Math.floor(Math.random() * (5 - 1) + 5); x++){
        list.push(crypto.randomUUID());
    }

    return {
        organisationId: data.organisationId,
        list
    }

});

export const getList5 = query(z.object({
    organisationId: z.number().positive()
}), async (data) => {

    const list: string[] = [];

    for(let x = 0; x < Math.floor(Math.random() * (5 - 1) + 5); x++){
        list.push(crypto.randomUUID());
    }

    return {
        organisationId: data.organisationId,
        list
    }

});

export const getList6 = query(z.object({
    organisationId: z.number().positive()
}), async (data) => {

    const list: string[] = [];

    for(let x = 0; x < Math.floor(Math.random() * (5 - 1) + 5); x++){
        list.push(crypto.randomUUID());
    }

    return {
        organisationId: data.organisationId,
        list
    }

});

export const executeSomething = command(z.object({
    organisationId: z.number().positive()
}), async (data) => {

    //  Doing something!
    await new Promise<void>((resolve) => setTimeout(() => resolve(), 300));

});