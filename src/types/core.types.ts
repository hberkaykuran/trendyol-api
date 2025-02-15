// src/types/core.types.ts
export type RequestFn = <T>(
  method: "GET" | "POST" | "PUT" | "DELETE",
  endpoint: string,
  data?: object
) => Promise<T>;

export interface ClientDependencies {
  request: RequestFn;
  sellerId: number;
}

/**
 * Transforms a function type that expects a dependency as its first argument
 * into one that no longer requires that parameter.
 *
 * For example, if you have:
 *   function foo(deps: ClientDependencies, a: string): number;
 *
 * then BoundFunction<typeof foo> becomes:
 *   (a: string) => number;
 */
export type BoundFunction<
  T extends (deps: ClientDependencies, ...args: any[]) => any
> = T extends (deps: ClientDependencies, ...args: infer P) => infer R
  ? (...args: P) => R
  : never;
