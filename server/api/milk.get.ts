export default defineEventHandler(async (event) => {
    return await prisma().milk.findMany();
});