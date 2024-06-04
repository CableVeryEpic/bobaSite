export default defineEventHandler(async (event) => {
    return await prisma().topping.findMany();
});