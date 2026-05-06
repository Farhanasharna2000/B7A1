# DRY Code with TypeScript Utility Types: Pick and Omit

## Introduction

One of the most important principles in software engineering is **DRY (Don't Repeat Yourself)**. In TypeScript, this often becomes a challenge when you need various versions of the same interface. This is where the `Pick` and `Omit` utility types become essential.

## Creating Specialized "Slices"

Instead of redefining interfaces for every use case, which creates a maintenance nightmare, you can create specialized "slices" of a master interface.

- **`Pick<T, K>`**: This utility allows you to construct a type by picking a specific set of properties `K` from a master interface `T`.
- **`Omit<T, K>`**: This utility constructs a type by picking all properties from `T` and then removing a specific set `K`.

```example
interface User {
  id: string;
  name: string;
  email: string;
  passwordHash: string;
}

// Slice for a public profile
type PublicProfile = Omit<User, "passwordHash">;

// Slice for a simple update request
type UserUpdate = Pick<User, "name" | "email">;
```

## Conclusion

Using Pick and Omit ensures you have a single source of truth. When the master interface changes, your derived types update automatically, keeping your code clean and highly maintainable.
