export default defineEventHandler(async (event) => {
    return await prisma().base.findMany();
});