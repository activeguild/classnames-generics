import { default as cn, Argument, Value } from "classnames";

type StringLiteral<T> = T extends `${string & T}` ? T : never;

export const classNames = <T extends Argument>(
  ...args: (Value | T | Partial<Record<StringLiteral<T>, boolean>>)[]
) => cn(args);

export const classNamesFunc =
  <T extends Argument>() =>
  (...args: (T | Partial<Record<StringLiteral<T>, boolean>>)[]) => {
    return cn(args);
  };
