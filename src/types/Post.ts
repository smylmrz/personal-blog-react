export interface Post {
    id: number
    title: string
    category_id: number
    slug: string
    subtitle?: string
    content: string
}