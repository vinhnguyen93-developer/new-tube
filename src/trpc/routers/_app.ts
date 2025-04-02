import { createTRPCRouter } from '../init';
import { categoriesRouter } from '@/modules/categories/server/proceduces';

export const appRouter = createTRPCRouter({
  categories: categoriesRouter
});

export type AppRouter = typeof appRouter;
