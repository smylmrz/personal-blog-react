import { Post } from "../types/Post.ts";

export const posts: Post[] = [
    {
        id: 1,
        title: "Why Vue is better than React?",
        slug: "why-vue-is-better-than-react",
        category_id: 1,
        subtitle: "This is a subtitle",
        content: "7-steps-to-your-first-remote-coding-job.md"
    },
    {
        id: 1,
        title: "Things you didn't know in Vue 3",
        slug: "the-const-deception",
        category_id: 2,
        subtitle: "This is a subtitle",
        content: "The “const” keyword in JavaScript is used to create constants, variables that can't change. Curiously, though, we do seem to be able to edit objects and arrays that are created using “const”. In this tutorial, we're going to dig into the incredibly-important distinction between “assignment” and “mutation” in JavaScript."
    },
]