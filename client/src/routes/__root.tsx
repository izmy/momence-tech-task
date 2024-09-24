import { Outlet, createRootRoute } from '@tanstack/react-router';
import * as v from 'valibot';

const QueryParamsSchema = v.object({
  favorites: v.optional(v.array(v.string())),
  value: v.optional(v.number()),
});

export type QueryParams = v.InferOutput<typeof QueryParamsSchema>;

export const Route = createRootRoute({
  component: () => <Outlet />,
  validateSearch: (search: Record<string, unknown>): QueryParams => {
    const validatedQueryParams = v.parse(QueryParamsSchema, search);

    return {
      ...validatedQueryParams,
    };
  },
});
