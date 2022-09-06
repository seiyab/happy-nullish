# happy-nullish

happy-nullish is designed for handling nullish (`null` or `undefined`) value.

## Example

```ts
import { vague } from "@seiyab/happy-nullish";

let x: number | null;
let y: number | undefined;

const z = vague(($) => $(x) + $(y));
```

|  x   |     y     |     z     |
| :--: | :-------: | :-------: |
|  1   |     2     |     3     |
| null |     2     |   null    |
|  1   | undefined | undefined |

## Installation

Work in Progress

## Description

`vague` takes a function as the first argument.

We call the function passed `procedure` in this doc.

`procedure` will receive verifier function as the first argument (`$` in the example).
Verifier function take a nullable value as the first argument and returns it if it is not `null` nor `undefined`.
Or else, it interrupts `procedure`. Then `procedure` returns nullish value.
