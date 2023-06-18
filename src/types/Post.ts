export interface Post {
    id: string
    title: string
    slug: string
    category_id: number
    subtitle?: string
    excerpt: string
    content: string
}