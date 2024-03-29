import { default as cn} from "classnames";

type StringLiteral<T> = T extends `${string & T}` ? T : never;

export const classNames = <T extends string>(
  ...args: (T | Partial<Record<StringLiteral<T>, boolean>>)[]
) => cn(args);

export const classNamesFunc =
  <T extends string>() =>
  (...args: (T | Partial<Record<StringLiteral<T>, boolean>>)[]) => {
    return cn(args);
  };
