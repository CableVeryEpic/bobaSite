export default defineEventHandler(async (event) => {
    return await prisma().flavour.findMany();
});