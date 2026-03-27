export const load = async () => {

    await new Promise<void>((resolve) => setTimeout(() => resolve(), 400));

    return {
        test: crypto.randomUUID()
    }

}